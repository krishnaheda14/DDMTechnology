#!/usr/bin/env pwsh
# Token Cleanup Verification Script
# Verifies no API token references remain in the codebase

Write-Host "===== Token Cleanup Verification =====" -ForegroundColor Cyan
Write-Host ""

$errors = 0

# 1. Check for token environment variables
Write-Host "[1/6] Checking for API token environment variables..." -ForegroundColor Yellow
$tokenEnvVars = Get-ChildItem -Path "." -Recurse -Include "*.env*","*.yml","*.yaml","*.json" -File | 
    Select-String -Pattern "CLOUDFLARE_API_TOKEN|CLOUDFLARE_ACCOUNT_ID" | 
    Where-Object { $_.Line -notmatch "NO.*TOKEN|should.*NEVER|not.*required|Note:" }

if ($tokenEnvVars) {
    Write-Host "  ❌ Found token references:" -ForegroundColor Red
    $tokenEnvVars | ForEach-Object { Write-Host "     $($_.Path):$($_.LineNumber)" }
    $errors++
} else {
    Write-Host "  ✅ No problematic token references found" -ForegroundColor Green
}

# 2. Check GitHub Actions workflow
Write-Host "[2/6] Checking GitHub Actions workflow..." -ForegroundColor Yellow
$workflowFile = ".github/workflows/deploy.yml"
if (Test-Path $workflowFile) {
    $workflow = Get-Content $workflowFile -Raw
    if ($workflow -match "cloudflare/wrangler-action|apiToken|CLOUDFLARE_API_TOKEN") {
        Write-Host "  ❌ GitHub Actions still references tokens or wrangler-action" -ForegroundColor Red
        $errors++
    } else {
        Write-Host "  ✅ GitHub Actions is token-free (build-only)" -ForegroundColor Green
    }
} else {
    Write-Host "  ⚠️  Workflow file not found" -ForegroundColor Yellow
}

# 3. Check package.json scripts
Write-Host "[3/6] Checking package.json scripts..." -ForegroundColor Yellow
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
$deployScripts = $packageJson.scripts.PSObject.Properties | Where-Object { $_.Name -match "deploy" }
if ($deployScripts) {
    Write-Host "  ⚠️  Found deploy scripts (optional, but not needed):" -ForegroundColor Yellow
    $deployScripts | ForEach-Object { Write-Host "     $($_.Name): $($_.Value)" }
} else {
    Write-Host "  ✅ No deploy scripts (using Cloudflare auto-deploy)" -ForegroundColor Green
}

# 4. Verify build succeeds
Write-Host "[4/6] Verifying build process..." -ForegroundColor Yellow
try {
    $buildOutput = npm run build 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ Build succeeded" -ForegroundColor Green
    } else {
        Write-Host "  ❌ Build failed" -ForegroundColor Red
        $errors++
    }
} catch {
    Write-Host "  ❌ Build error: $_" -ForegroundColor Red
    $errors++
}

# 5. Check dist/ output
Write-Host "[5/6] Checking dist/ output..." -ForegroundColor Yellow
$requiredFiles = @("index.html", "_redirects", "_headers", "robots.txt")
$missingFiles = @()
foreach ($file in $requiredFiles) {
    if (-not (Test-Path "dist/$file")) {
        $missingFiles += $file
    }
}
if ($missingFiles.Count -gt 0) {
    Write-Host "  ❌ Missing files in dist/: $($missingFiles -join ', ')" -ForegroundColor Red
    $errors++
} else {
    Write-Host "  ✅ All required files present in dist/" -ForegroundColor Green
}

# 6. Check for wrangler.toml (should not exist for Pages)
Write-Host "[6/6] Checking for Worker config files..." -ForegroundColor Yellow
if (Test-Path "wrangler.toml") {
    Write-Host "  ⚠️  wrangler.toml exists (not needed for Pages deployment)" -ForegroundColor Yellow
} else {
    Write-Host "  ✅ No wrangler.toml (Pages-only deployment)" -ForegroundColor Green
}

# Summary
Write-Host ""
Write-Host "===== Verification Summary =====" -ForegroundColor Cyan
if ($errors -eq 0) {
    Write-Host "✅ All checks passed! Project is token-free and ready for Cloudflare Pages." -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor White
    Write-Host "  1. Push to GitHub: git push origin main" -ForegroundColor White
    Write-Host "  2. Connect repository in Cloudflare Pages Dashboard" -ForegroundColor White
    Write-Host "  3. Configure build settings (npm run build, dist/)" -ForegroundColor White
    Write-Host "  4. Deploy automatically on every push!" -ForegroundColor White
    exit 0
} else {
    Write-Host "❌ $errors error(s) found. Please fix before deploying." -ForegroundColor Red
    exit 1
}
