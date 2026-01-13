# Deployment Guide

## Cloudflare Pages Deployment

This website is configured for deployment on Cloudflare Pages, a fast and secure static site hosting platform with global CDN.

### Prerequisites

1. **Cloudflare Account**: Sign up at [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. **Wrangler CLI**: Install globally or use the local version
   ```bash
   npm install -g wrangler
   # OR use the project's local version via npm scripts
   ```

3. **Node.js (v20+)**: Cloudflare Wrangler requires Node.js v20 or newer. If your system uses an older Node version (for example, v18), upgrade using a version manager.

   Windows (nvm-windows):
   ```powershell
   # Install nvm-windows from https://github.com/coreybutler/nvm-windows/releases
   nvm install 20.18.1
   nvm use 20.18.1
   node -v
   ```

   Cross-platform (Volta):
   ```bash
   curl https://get.volta.sh | bash
   volta install node@20.18.1
   volta pin node@20.18.1
   node -v
   ```

   Alternatively, download the official Node.js installer for v20 from https://nodejs.org/en/download/.

### Initial Setup

1. **Login to Cloudflare**:
   ```bash
   npx wrangler login
   ```
   This will open a browser window for authentication.

2. **Verify Configuration**:
   Check `wrangler.toml` for project settings:
   - Project name: `ddm-infotech-website`
   - Build output: `dist`
   - Build command: `npm run build`

### Deployment Methods

#### Method 1: Automatic Deployment (Recommended)

**Via GitHub Integration** (Recommended for Production):

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: None required initially

6. Click "Save and Deploy"

Cloudflare will automatically deploy on every push to your main branch.

#### Method 2: Manual Deployment via CLI

**Important:** Do not run `npx wrangler deploy` — that runs Workers-specific deploy and will fail for Pages projects. Use the Pages-specific command below.

**Quick Deploy**:
```bash
npm run deploy
```

**Or step-by-step**:
```bash
# 1. Build the project
npm run build

# 2. Deploy to Cloudflare Pages (Pages CLI)
npx wrangler pages deploy dist
```

**Deploy to specific project**:
```bash
npm run pages:deploy
```

**Notes on `wrangler deploy` vs `wrangler pages deploy`**

- If you prefer to use `wrangler deploy` (Workers-style), provide the built assets with the `--assets` flag:

```bash
# Deploy assets explicitly (Workers CLI)
npx wrangler deploy --assets=./dist
```

- Or include an `[assets]` section in your `wrangler.toml`:

```toml
[assets]
directory = "./dist"
```

However, for Cloudflare Pages projects the recommended command remains:

```bash
npx wrangler pages deploy dist
```

#### Method 3: Direct Upload

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Click "Upload assets"
4. Drag and drop the `dist` folder or select files

### Environment-Specific Deployments

#### Production
```bash
npx wrangler pages deploy dist --branch=main
```

#### Staging/Preview
```bash
npx wrangler pages deploy dist --branch=staging
```

### Custom Domain Setup

1. **In Cloudflare Dashboard**:
   - Go to Pages → Your Project → Custom domains
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `ddminfotech.com`)
   - Follow DNS configuration instructions

2. **Update wrangler.toml** (optional):
   ```toml
   [env.production]
   routes = [
     { pattern = "ddminfotech.com", zone_name = "ddminfotech.com" }
   ]
   ```

### Environment Variables

If you need environment variables:

1. **Via Dashboard**:
   - Pages → Your Project → Settings → Environment variables
   - Add key-value pairs

2. **Via CLI** (for local development):
   Create `.dev.vars` file:
   ```
   API_KEY=your-api-key
   ```

### Build Optimization

The project includes:
- ✅ TypeScript compilation before build
- ✅ Vite production optimization
- ✅ Asset minification and bundling
- ✅ CSS Modules with tree-shaking
- ✅ Security headers in `_headers` file
- ✅ Client-side routing via `_redirects`

### Post-Deployment

1. **Verify deployment**:
   - Cloudflare provides a `*.pages.dev` URL
   - Example: `https://ddm-infotech-website.pages.dev`

2. **Check build logs**:
   ```bash
   npx wrangler pages deployment list
   ```

3. **View deployment details**:
   - Dashboard → Pages → Your Project → Deployments

### Preview Deployments

Every branch and pull request gets its own preview URL:
- Main branch: `https://ddm-infotech-website.pages.dev`
- Branch: `https://[branch].ddm-infotech-website.pages.dev`
- PR: Automatic preview URL in PR comments

### Local Testing

Test the production build locally:
```bash
# Build the project
npm run build

# Preview with Vite
npm run preview

# OR preview with Wrangler (simulates Cloudflare environment)
npm run pages:dev
```

### Troubleshooting

**Build fails**:
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run build`
- Review build logs in Cloudflare Dashboard

**404 on routes**:
- Verify `_redirects` file exists in `public/` folder
- Check that all routes redirect to `index.html`

**Assets not loading**:
- Check asset paths are relative, not absolute
- Verify `dist` folder contains all assets after build

**Custom domain not working**:
- Verify DNS records are properly configured
- Wait for DNS propagation (up to 24 hours)
- Check SSL/TLS settings in Cloudflare

### Performance

Cloudflare Pages provides:
- ✅ Global CDN with 275+ locations
- ✅ Automatic HTTPS/SSL
- ✅ Unlimited bandwidth
- ✅ DDoS protection
- ✅ Web Application Firewall (WAF)
- ✅ Built-in analytics

### Rollback

To rollback to a previous deployment:
1. Dashboard → Pages → Your Project → Deployments
2. Find the working deployment
3. Click "..." → "Rollback to this deployment"

### CI/CD Integration

The GitHub integration provides automatic CI/CD:
- ✅ Automatic builds on push
- ✅ Preview deployments for PRs
- ✅ Build status in GitHub checks
- ✅ Deployment comments on PRs

### Monitoring

Monitor your deployment:
- **Analytics**: Dashboard → Pages → Your Project → Analytics
- **Real-time logs**: Available during build
- **Uptime**: Cloudflare's 100% uptime SLA

### Cost

Cloudflare Pages Free Tier includes:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time

For higher limits, upgrade to Pages Pro.

### Next Steps

1. Deploy your site using one of the methods above
2. Configure a custom domain
3. Set up analytics
4. Enable web analytics in Cloudflare Dashboard
5. Configure caching rules if needed

### Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Community Forum](https://community.cloudflare.com/c/developers/pages/)

---

**Quick Start Command**:
```bash
npm install && npm run build && npx wrangler pages deploy dist
```
