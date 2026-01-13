# 🚀 Deployment Guide - DDM Infotech Website

Complete guide for deploying your website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is finalized and reviewed
- [ ] Contact form is configured (email/API endpoint)
- [ ] Email addresses are correct in site config
- [ ] SEO meta tags are optimized
- [ ] Images are optimized for web
- [ ] All links are working
- [ ] Responsive design is tested on multiple devices
- [ ] Browser compatibility is verified (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse scores are acceptable (Performance, Accessibility, SEO)
- [ ] No console errors in production build
- [ ] Analytics tracking is configured (if applicable)

## Building for Production

### 1. Create Production Build

```bash
# Install dependencies (if not already done)
npm install

# Create optimized production build
npm run build
```

This creates a `dist/` folder with optimized files:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Source maps (for debugging)

### 2. Test Production Build Locally

```bash
npm run preview
```

Visit the provided URL and thoroughly test all functionality.

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Best for**: Quick deployment, automatic CI/CD, free tier available

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

#### Configure via GitHub (Alternative)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Auto-deployment**: Every push to main branch triggers automatic deployment.

#### Custom Domain
1. In Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

### Option 2: Netlify

**Best for**: Easy deployment, form handling, serverless functions

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Login**
   ```bash
   netlify login
   ```

4. **Initialize and Deploy**
   ```bash
   netlify init
   ```

5. **Deploy to Production**
   ```bash
   netlify deploy --prod
   ```

#### Configure via GitHub

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Netlify Form Integration

For contact form, add to your form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

Netlify automatically handles form submissions!

---

### Option 3: GitHub Pages

**Best for**: Free hosting for public repositories

#### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... other config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages"
   - Source: Deploy from branch `gh-pages`
   - Save

Site will be live at: `https://yourusername.github.io/repository-name`

---

### Option 4: Traditional Web Hosting (cPanel, FTP)

**Best for**: Existing hosting plans, full control

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder contents**
   
   Via FTP:
   - Connect to your hosting server
   - Navigate to public_html or www directory
   - Upload all files from `dist/` folder
   - Maintain folder structure

   Via cPanel:
   - Login to cPanel
   - Open File Manager
   - Navigate to public_html
   - Upload and extract dist folder contents

3. **Configure .htaccess** (for Apache servers)
   
   Create `.htaccess` in root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Test the deployment**
   Visit your domain and test all pages

---

### Option 5: AWS S3 + CloudFront

**Best for**: Enterprise deployments, global CDN, high traffic

#### Steps:

1. **Create S3 Bucket**
   - Name: your-domain.com
   - Enable static website hosting
   - Set index document: index.html
   - Make bucket public

2. **Upload Files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Enable HTTPS
   - Set custom domain (optional)

4. **Configure Route 53** (for custom domain)
   - Create hosted zone
   - Add A record pointing to CloudFront

---

### Option 6: DigitalOcean App Platform

**Best for**: Scalable applications, simple pricing

#### Steps:

1. Push code to GitHub
2. Visit DigitalOcean App Platform
3. Create new app from GitHub repo
4. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy

---

## Environment Variables

If you need environment variables (API keys, etc.):

### Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

### Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### Platform-specific configuration:

**Vercel**: Add in dashboard under Settings → Environment Variables

**Netlify**: Add in dashboard under Site settings → Environment variables

**GitHub Actions**: Add as repository secrets

---

## Contact Form Configuration

### Option 1: Formspree
```typescript
// In Contact.tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 2: EmailJS
```typescript
import emailjs from 'emailjs-com'

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_USER_ID'
)
```

### Option 3: Netlify Forms
Add to form element:
```html
<form data-netlify="true" name="contact">
```

### Option 4: Custom Backend API
```typescript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

---

## Performance Optimization

### Before Deployment:

1. **Optimize Images**
   - Use WebP format
   - Compress with TinyPNG or ImageOptim
   - Implement lazy loading

2. **Minimize Bundle Size**
   ```bash
   npm run build
   # Check dist folder size
   ```

3. **Enable Compression**
   - Gzip or Brotli (usually automatic on hosting platforms)

4. **Add Caching Headers**
   - Configure in hosting platform settings
   - Or add to `.htaccess` for Apache

---

## Custom Domain Setup

### DNS Configuration:

For most hosting providers:

1. **A Record**
   - Type: A
   - Name: @
   - Value: [IP from hosting provider]

2. **CNAME Record**
   - Type: CNAME
   - Name: www
   - Value: [provided by hosting]

3. **Wait for DNS Propagation** (up to 48 hours)

### SSL Certificate

Most platforms provide free SSL (Let's Encrypt):
- **Vercel**: Automatic
- **Netlify**: Automatic
- **cPanel**: Enable in SSL/TLS section

---

## Monitoring & Analytics

### Google Analytics

1. Create GA4 property
2. Add tracking code to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring

Use tools like:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (in Chrome DevTools)
- WebPageTest

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Rollback Procedures

### Vercel
- Visit deployment dashboard
- Click "Promote to Production" on previous deployment

### Netlify
- Go to Deploys tab
- Find previous successful deploy
- Click "Publish deploy"

### Manual Hosting
- Keep backup of previous `dist` folder
- Re-upload old files via FTP/cPanel

---

## Post-Deployment Checklist

After deployment:

- [ ] Visit the live site and test all pages
- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Check on multiple devices and browsers
- [ ] Test page load speed
- [ ] Verify SSL certificate is active
- [ ] Check Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Test form validation
- [ ] Verify analytics tracking
- [ ] Check responsive design
- [ ] Test navigation (mobile menu)
- [ ] Verify social sharing works
- [ ] Check 404 page handling

---

## Troubleshooting

### Blank Page After Deploy
- Check browser console for errors
- Verify `base` path in vite.config.ts
- Check if all assets loaded correctly

### 404 on Refresh
- Configure server to serve index.html for all routes
- Add `.htaccess` for Apache
- Configure rewrites in hosting platform

### Slow Loading
- Enable compression (Gzip/Brotli)
- Optimize images
- Use CDN for assets
- Enable caching

### Form Not Working
- Check API endpoint/service configuration
- Verify CORS settings
- Check browser console for errors
- Test with actual email addresses

---

## Recommended Hosting Comparison

| Platform | Best For | Free Tier | Custom Domain | SSL | CI/CD |
|----------|----------|-----------|---------------|-----|-------|
| Vercel | Modern apps | ✅ | ✅ | ✅ Auto | ✅ |
| Netlify | Forms/Functions | ✅ | ✅ | ✅ Auto | ✅ |
| GitHub Pages | Open source | ✅ | ✅ | ✅ Auto | ⚠️ Manual |
| Traditional Host | Full control | ❌ | ✅ | ⚠️ Varies | ❌ |
| AWS S3/CloudFront | Enterprise | ❌ | ✅ | ✅ | ⚠️ Custom |

---

## Support & Resources

- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Guide](https://pages.github.com/)

---

**Need help with deployment?**  
Contact: info@ddminfotech.com

---

**Last Updated**: January 2026
