# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy

```bash
npm install
npm run build
npm run deploy
```

## Prerequisites

1. **Node.js 20+** - Required by Cloudflare Wrangler
   ```bash
   node -v  # Should show v20.0.0 or higher
   ```

2. **Cloudflare Account** - Sign up at [dash.cloudflare.com](https://dash.cloudflare.com/sign-up)

3. **Wrangler CLI** - Already installed in devDependencies
   ```bash
   npx wrangler login
   ```

## 📋 Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Connect Repository to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository: `DDMTechnology`

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   Environment variables: (none required initially)
   Node version: 20
   ```

3. **Deploy**
   - Click "Save and Deploy"
   - Every push to `main` will auto-deploy
   - Pull requests get preview URLs automatically

### Method 2: CLI Deployment

1. **Authenticate with Cloudflare**
   ```bash
   npx wrangler login
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Pages**
   ```bash
   npm run deploy
   ```
   
   Or for CI/CD:
   ```bash
   npm run deploy:ci
   ```

### Method 3: Direct Upload (Manual)

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to Cloudflare Dashboard → Pages → "Upload assets"

3. Drag and drop the `dist` folder

## 🔧 Configuration Files

### `wrangler.toml`
- Configures Cloudflare Workers/Pages settings
- Sets build commands and output directory
- Defines environment variables

### `_redirects`
- Handles client-side routing for React
- Prevents 404 errors on page refresh
- Located in `public/_redirects`

### `_headers`
- Security and cache headers
- CORS configuration
- Located in `public/_headers`

## 🧪 Testing Locally

### Test with Vite Dev Server
```bash
npm run dev
```
Visit: http://localhost:3000

### Test Production Build Locally
```bash
npm run build
npm run preview
```

### Test with Wrangler (Simulates Cloudflare)
```bash
npm run test:local
```

## 🐛 Troubleshooting

### Infinite Redirect Error
**Error:** "Infinite loop detected in this rule"

**Solution:**
1. Check `public/_redirects` file
2. Ensure rules are in correct order:
   ```
   /*              /index.html    200
   /*.html         /index.html    200
   /assets/*       /assets/:splat 200
   ```
3. Rebuild: `npm run build`

### Build Failures

**TypeScript Errors:**
```bash
npm run lint
npx tsc --noEmit
```

**Clear Cache and Rebuild:**
```bash
rm -rf node_modules dist .vite
npm install
npm run build
```

### Assets Not Loading

1. **Check asset paths** - Use relative paths starting with `/`
2. **Verify build output:**
   ```bash
   ls -la dist/assets/
   ```
3. **Check `_redirects`** - Ensure `/assets/*` rule exists

### Node Version Error

**Error:** "Wrangler requires at least Node.js v20.0.0"

**Solution:**
```bash
# Using nvm-windows (Windows)
nvm install 20.18.1
nvm use 20.18.1

# Using Volta (Cross-platform)
volta install node@20.18.1

# Or download from nodejs.org
```

### Custom Domain Not Working

1. **Add Custom Domain in Cloudflare:**
   - Dashboard → Pages → Your Project → Custom domains
   - Click "Set up a custom domain"
   - Enter: `ddminfotech.com`

2. **Update DNS Records:**
   - Add CNAME record pointing to `ddmtechnology.pages.dev`
   - Or use Cloudflare's automatic DNS setup

3. **Wait for Propagation** (up to 24 hours)

4. **Verify SSL Certificate:**
   - Cloudflare auto-provisions SSL
   - Check: Dashboard → SSL/TLS → Edge Certificates

## 🔐 Environment Variables

### For Local Development
Create `.env` file (copy from `.env.example`):
```env
VITE_BASE_URL=/
NODE_ENV=development
```

### For Production (Cloudflare Dashboard)
1. Dashboard → Pages → Your Project → Settings → Environment variables
2. Add:
   - `NODE_ENV` = `production`
   - `VITE_BASE_URL` = `/`

### In GitHub Actions
1. Repository → Settings → Secrets and variables → Actions
2. Add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

## 📊 Performance Optimization

### Automatic Optimizations (Cloudflare)
- ✅ Global CDN (275+ locations)
- ✅ Automatic HTTPS/SSL
- ✅ DDoS protection
- ✅ Web Application Firewall (WAF)
- ✅ Brotli compression
- ✅ Image optimization
- ✅ Edge caching

### Build Optimizations (Vite)
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification (Terser)
- ✅ CSS optimization
- ✅ Asset hashing

## 🔍 Monitoring & Analytics

### View Deployment Logs
```bash
npx wrangler pages deployment list
```

### Real-time Analytics
- Dashboard → Pages → Your Project → Analytics
- Metrics: Requests, Bandwidth, Cache hit ratio

### Build Logs
- Dashboard → Pages → Your Project → Deployments
- Click any deployment to view logs

## 🌍 Custom Domain Setup

### Step 1: Add Domain to Cloudflare
```bash
# Via Dashboard
Dashboard → Add a Site → Enter domain → Select Free Plan
```

### Step 2: Configure DNS
```bash
# Add CNAME record
Type: CNAME
Name: @
Target: ddmtechnology.pages.dev
Proxy: Proxied (orange cloud)
```

### Step 3: Update wrangler.toml (Optional)
```toml
[[routes]]
pattern = "ddminfotech.com/*"
zone_name = "ddminfotech.com"
```

## 🚦 CI/CD Pipeline

The project includes GitHub Actions workflow (`.github/workflows/deploy.yml`):

**Triggers:**
- Push to `main` branch
- Pull requests to `main`

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Run linter
5. Build project
6. Deploy to Cloudflare Pages
7. Upload build artifacts

## 📝 Deployment Checklist

Before deploying:
- [ ] Run `npm run lint` - No errors
- [ ] Run `npm run build` - Successful build
- [ ] Test locally with `npm run test:local`
- [ ] Check `dist/` folder exists with all assets
- [ ] Verify `_redirects` file in `dist/`
- [ ] Verify `_headers` file in `dist/`
- [ ] Remove console.log statements
- [ ] Update environment variables in Cloudflare Dashboard

## 🆘 Support Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Wrangler Docs:** https://developers.cloudflare.com/workers/wrangler/
- **Community Forum:** https://community.cloudflare.com/c/developers/pages/
- **Status Page:** https://www.cloudflarestatus.com/

## 🎯 Production URLs

After deployment, your site will be available at:
- **Production:** `https://ddmtechnology.pages.dev`
- **Preview (branches):** `https://[branch].ddmtechnology.pages.dev`
- **Custom Domain:** `https://ddminfotech.com` (after setup)

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Check for errors

# Deployment
npm run deploy          # Build and deploy to Cloudflare
npm run deploy:ci       # Deploy with project name
npm run test:local      # Test with Wrangler locally

# Maintenance
npm run format          # Format code with Prettier
npm install             # Install dependencies
npm ci                  # Clean install (CI/CD)
```

---

**Last Updated:** January 14, 2026
