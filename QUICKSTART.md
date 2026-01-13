# 🚀 Quick Start Guide - DDM Infotech Website

Get up and running in 5 minutes!

## Prerequisites Check

Before you begin, ensure you have:
- ✅ Node.js 16 or higher installed
- ✅ npm or yarn package manager
- ✅ A code editor (VS Code recommended)
- ✅ A modern web browser

## Installation Steps

### 1. Install Dependencies
Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, TypeScript, Vite, and development tools.

### 2. Start Development Server
```bash
npm run dev
```

The development server will start at `http://localhost:5173`

Open your browser and navigate to that URL to see your website!

### 3. Make Your First Edit

Try editing [src/constants/site.config.ts](src/constants/site.config.ts):

```typescript
export const SITE_CONFIG = {
  name: 'DDM Infotech',
  email: 'your-email@ddminfotech.com',  // ← Change this
  // ...
}
```

Save the file and watch the browser automatically update! 🎉

## Common Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure at a Glance

```
src/
├── components/       # All React components
│   ├── layout/      # Header, Footer
│   ├── sections/    # Hero, Products, etc.
│   └── ui/          # Buttons, Cards, etc.
├── constants/       # Data and configuration
├── hooks/           # Custom React hooks
├── styles/          # Global styles and CSS
├── types/           # TypeScript definitions
└── utils/           # Helper functions
```

## Quick Customization Guide

### Change Company Information
**File**: `src/constants/site.config.ts`

Update email, location, and social links.

### Add a New Product
**File**: `src/constants/products.data.ts`

Add a new object to the `PRODUCTS` array:
```typescript
{
  id: 'my-product',
  title: 'My Product Name',
  description: 'Short description',
  features: ['Feature 1', 'Feature 2'],
  isFeatured: false,
  icon: '🎯',
}
```

### Change Color Scheme
**File**: `src/styles/variables.css`

Modify CSS variables:
```css
:root {
  --color-primary: #YourColor;
  --color-secondary: #YourColor;
}
```

### Update Hero Section
**File**: `src/components/sections/Hero/Hero.tsx`

Edit the title, subtitle, or CTAs directly in the component.

## Development Tips

### 💡 Hot Reload
Changes to most files will automatically update in the browser. If something doesn't update:
1. Save the file again
2. Refresh the browser
3. Restart the dev server if needed

### 🎨 CSS Modules
Each component has its own `.module.css` file for scoped styles. Changes to these files trigger instant updates.

### 🔍 TypeScript
Red squiggly lines in your editor? Hover over them to see TypeScript error messages. Fix them before building for production.

### 📱 Testing Responsiveness
- Use browser DevTools (F12)
- Toggle device toolbar
- Test on actual mobile devices

## Building for Production

When you're ready to deploy:

```bash
# 1. Build the production bundle
npm run build

# 2. Test the production build locally
npm run preview

# 3. The optimized files will be in the `dist/` folder
# Upload these files to your web hosting service
```

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically try the next available port. Check your terminal for the actual URL.

### Module Not Found
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript Errors
```bash
# Check for errors
npm run build

# Most errors will show the file and line number
```

### Styles Not Applying
1. Check that CSS Module class names use camelCase
2. Verify imports at the top of component files
3. Restart dev server if needed

## Next Steps

Once you're comfortable with the basics:

1. 📖 Read the full [README.md](README.md)
2. 📚 Explore [DOCUMENTATION.md](DOCUMENTATION.md)
3. 🎨 Check out [STYLE_GUIDE.md](STYLE_GUIDE.md)
4. 🔧 Customize components to match your needs
5. 🚀 Deploy to production

## Need Help?

- **Documentation Issues**: Check [DOCUMENTATION.md](DOCUMENTATION.md)
- **Style Questions**: See [STYLE_GUIDE.md](STYLE_GUIDE.md)
- **Technical Support**: info@ddminfotech.com

## Useful VS Code Extensions

Enhance your development experience:

- ESLint - Code linting
- Prettier - Code formatting
- TypeScript Vue Plugin (Volar) - Better TypeScript support
- CSS Modules - IntelliSense for CSS Modules
- Auto Rename Tag - Automatically rename paired HTML/JSX tags

## Keyboard Shortcuts

**In Development**:
- `Ctrl/Cmd + S` - Save and trigger hot reload
- `Ctrl/Cmd + C` - Stop dev server (in terminal)
- `Ctrl/Cmd + Shift + F` - Search across all files

**In Browser**:
- `Ctrl/Cmd + R` - Refresh page
- `F12` - Open DevTools
- `Ctrl/Cmd + Shift + M` - Toggle device toolbar (responsive mode)

---

## Your Website is Ready! 🎉

You now have a fully functional, professional website. Start customizing it to match your brand and business needs.

**Happy coding!** 💻✨

---

**Quick Links**:
- [Full Documentation](DOCUMENTATION.md)
- [Style Guide](STYLE_GUIDE.md)
- [Changelog](CHANGELOG.md)
