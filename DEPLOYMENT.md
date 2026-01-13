# Deployment Guide - Cloudflare Pages

> **No API Tokens Required** - Cloudflare Pages auto-deploys directly from GitHub!

## 🚀 Quick Start

The easiest way to deploy is through Cloudflare's GitHub integration - no command line or tokens needed!

## Prerequisites

- Node.js 20+ installed locally
- GitHub repository with your code
- Free Cloudflare account ([sign up here](https://dash.cloudflare.com/sign-up))

## 📋 Deployment Methods

### Method 1: Cloudflare Pages Auto-Deploy (Recommended)

**No tokens, no CLI, no manual uploads** - Deploy automatically on every push!

1. **Connect Your Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click **"Create a project"** → **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub
   - Select the `DDMTechnology` repository

2. **Configure Build Settings**
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

3. **Set Environment Variables** (Optional)
   - Click "Add variable" only if needed
   - Common: `NODE_ENV=production` (usually auto-detected)

4. **Click "Save and Deploy"**
   - First deployment starts automatically
   - Takes ~2-3 minutes
   - You'll get a `*.pages.dev` URL

5. **Automatic Deployments**
   - Every push to `main` → Production deploy
   - Every pull request → Preview deploy with unique URL
   - No manual intervention required!

### Method 2: Manual Upload via Dashboard

For quick tests without Git integration:

1. **Build Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload in Dashboard**
   - Go to Cloudflare Dashboard → Pages
   - Click **"Create a project"** → **"Upload assets"**
   - Drag and drop the entire `dist/` folder
   - Click "Deploy site"

### Method 3: Local Testing Only

Test the production build on your machine:

```bash
npm run build
npm run preview
```

Visit http://localhost:4173 to view the built site locally.

## 🔧 Build Configuration

Your project is already configured for Cloudflare Pages:

### ✅ Vite Config (`vite.config.ts`)
- Base path: `/` (works with Cloudflare)
- Output directory: `dist/`
- Asset hashing enabled for cache busting

### ✅ Redirects (`public/_redirects`)
```
/* /index.html 200
```
Ensures React Router works properly (SPA routing).

### ✅ Security Headers (`public/_headers`)
Security and cache headers automatically applied.

### ✅ SEO (`public/robots.txt`)
Search engine configuration included.

## 🐛 Troubleshooting

### Build Fails in Cloudflare

**Check Node Version:**
- Cloudflare Pages uses Node 20 by default
- Your `package.json` requires Node >=20 ✅

**View Build Logs:**
- Dashboard → Pages → Your Project → Deployments
- Click the failing deployment
- Scroll to "Build log" section

**Common Fixes:**
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint

# Clear and reinstall
rm -rf node_modules
npm install
```

### Site Loads But Routes Don't Work

**Problem:** Getting 404 on page refresh or direct URL access.

**Solution:** Verify `public/_redirects` exists and contains:
```
/* /index.html 200
```

This file should be copied to `dist/_redirects` during build.

### Assets Not Loading (404 on CSS/JS)

**Check Build Output:**
```bash
npm run build
ls dist/
ls dist/assets/
```

Expected structure:
```
dist/
├── index.html
├── _redirects
├── _headers
├── robots.txt
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── logo-[hash].png
```

### Custom Domain Not Working

1. **Add Custom Domain**
   - Dashboard → Pages → Your Project → Custom domains
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `ddminfotech.com`)

2. **Update DNS**
   - If domain is on Cloudflare: Automatic
   - If external: Add CNAME record pointing to `ddmtechnology.pages.dev`

3. **Wait for SSL**
   - Cloudflare automatically provisions SSL certificate
   - Usually takes 5-10 minutes
   - Check: Dashboard → SSL/TLS settings

## 📊 Post-Deployment

### Your URLs

After deployment, your site will be available at:

- **Production**: `https://ddmtechnology.pages.dev`
- **Custom domain**: `https://ddminfotech.com` (after DNS setup)
- **PR previews**: `https://<commit-hash>.ddmtechnology.pages.dev`

### View Analytics

Dashboard → Pages → Your Project → Analytics

Metrics available:
- Page views
- Unique visitors
- Bandwidth usage
- Geographic distribution
- Cache hit ratio

### Manage Deployments

Dashboard → Pages → Your Project → Deployments

Options:
- View all deployments
- Rollback to previous version
- Delete old deployments
- View deployment logs

## 🌐 GitHub Actions (Optional)

Your repository includes a GitHub Actions workflow that:
- Runs on every push/PR
- Lints and builds the code
- Uploads build artifacts
- **Does NOT deploy** (Cloudflare handles that automatically)

This ensures code quality before Cloudflare deploys.

## ⚙️ Environment Variables

### Local Development

Create `.env` (optional):
```env
VITE_APP_TITLE=DDM Infotech
VITE_APP_DESCRIPTION=Automating Growth
```

Only variables prefixed with `VITE_` are exposed to the browser.

### Production (Cloudflare Dashboard)

Usually not needed, but if required:
1. Dashboard → Pages → Project → Settings → Environment variables
2. Add variable → Enter name and value
3. Redeploy for changes to take effect

**Example:**
```
NODE_ENV = production
VITE_SITE_URL = https://ddminfotech.com
```

## 🔒 Security Notes

- **No secrets in code**: API tokens should NEVER be in your repository
- **Client-safe variables only**: Use `VITE_` prefix for browser variables
- **Automatic SSL**: All `*.pages.dev` domains get free SSL
- **Security headers**: Configured in `public/_headers`

## 📦 What Gets Deployed

When you build and deploy, these files go to Cloudflare:

```
dist/
├── index.html           # Main HTML file
├── _redirects           # SPA routing rules
├── _headers             # Security headers
├── robots.txt           # SEO configuration
└── assets/              # All JS, CSS, images (with cache-busting hashes)
```

## 🎯 Deployment Checklist

Before deploying:
- [ ] `npm run build` succeeds locally
- [ ] `npm run preview` shows working site
- [ ] No console errors in browser
- [ ] All images load correctly
- [ ] Navigation works on all routes
- [ ] Mobile responsive verified
- [ ] Contact form displays (backend setup separate)

After deploying:
- [ ] Visit production URL
- [ ] Test all navigation links
- [ ] Verify assets load (no 404s)
- [ ] Test on mobile device
- [ ] Check browser console for errors
- [ ] Test page refresh on different routes

## 🆘 Need Help?

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Community Forum**: https://community.cloudflare.com/
- **GitHub Issues**: Create an issue in your repository
- **Build Logs**: Always check deployment logs first

---

**Status**: ✅ Ready to Deploy  
**Method**: Cloudflare Pages Auto-Deploy (No tokens required)  
**Updated**: January 14, 2026
