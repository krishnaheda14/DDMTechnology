# DDM Infotech Website

Professional, scalable React + TypeScript website for DDM Infotech - A SaaS company specializing in business automation software with focus on jewelry industry solutions and custom CRM systems.

## 🚀 Features

- **Modern Tech Stack**: React 18+ with TypeScript and Vite
- **Professional Design**: Luxurious color scheme with Midnight Navy (#0A1A2F) and Metallic Gold (#D4AF37)
- **Responsive**: Mobile-first responsive design
- **Modular Architecture**: Component-based structure for easy maintenance and scalability
- **CSS Modules**: Scoped styling with CSS variables for theming
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- **Type-Safe**: Full TypeScript support with strict mode enabled

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser
- Code editor (VS Code recommended)

## 🛠️ Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/         # Site header with navigation
│   │   └── Footer/         # Site footer
│   ├── sections/
│   │   ├── Hero/           # Hero section with CTA
│   │   ├── Products/       # Products showcase
│   │   ├── Industries/     # Industries served
│   │   ├── ValueProposition/ # Why DDM Infotech
│   │   ├── Approach/       # Process and methodology
│   │   ├── Clients/        # Target clients
│   │   └── Contact/        # Contact form
│   ├── ui/
│   │   ├── Button/         # Reusable button component
│   │   ├── Card/           # Card component with variants
│   │   ├── SectionTitle/   # Section heading component
│   │   └── TrustBadge/     # Trust indicator badge
│   └── shared/
│       └── Logo/           # Company logo component
├── hooks/
│   ├── useScrollAnimation.ts  # Intersection observer hook
│   └── useResponsive.ts       # Responsive breakpoint hook
├── types/
│   ├── product.types.ts    # Product type definitions
│   └── section.types.ts    # Section type definitions
├── constants/
│   ├── products.data.ts    # Product catalog data
│   ├── industries.data.ts  # Industries data
│   ├── content.data.ts     # Site content data
│   ├── colors.ts           # Color constants
│   └── site.config.ts      # Site configuration
├── utils/
│   ├── scroll.ts           # Scroll utilities
│   └── validation.ts       # Form validation utilities
├── styles/
│   ├── globals.css         # Global styles
│   ├── variables.css       # CSS custom properties
│   └── animations.css      # Animation definitions
├── App.tsx                 # Main app component
└── main.tsx               # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0A1A2F` (Midnight Navy)
- **Secondary**: `#D4AF37` (Metallic Gold)
- **Accent Grey**: `#AEB7C2` (Ice Grey)
- **Charcoal**: `#1C1C1C`

### Typography
- **Headings**: Playfair Display
- **Body**: Inter
- **Code**: Monaco

### Spacing System
Based on 8px unit:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
- 4xl: 128px

## 🔧 Customization Guide

### Adding a New Product

1. Open `src/constants/products.data.ts`
2. Add a new product to the `PRODUCTS` array:

```typescript
{
  id: 'new-product',
  title: 'Product Name',
  description: 'Brief description',
  features: [
    'Feature 1',
    'Feature 2',
    // ...
  ],
  isFeatured: false,
  icon: '🎯',
}
```

### Adding a New Industry

1. Open `src/constants/industries.data.ts`
2. Add a new industry to the `INDUSTRIES` array:

```typescript
{
  id: 'new-industry',
  name: 'Industry Name',
  description: 'Industry description',
  isHighlighted: false,
  icon: '🏪',
}
```

### Adding a New Section

1. Create a new directory in `src/components/sections/`
2. Create component files:
   - `NewSection.tsx` (component logic)
   - `NewSection.module.css` (styles)
   - `index.ts` (exports)
3. Import and add to `src/App.tsx`

### Customizing Colors

Edit `src/styles/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #YourColor;
  --color-secondary: #YourColor;
  /* ... */
}
```

### Modifying Navigation

Edit `src/constants/site.config.ts`:

```typescript
navigation: [
  { label: 'New Link', href: '#section-id' },
  // ...
]
```

## 🔌 Contact Form Integration

The contact form in `src/components/sections/Contact/Contact.tsx` currently simulates submission. To integrate with a backend:

### Option 1: Formspree
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 2: Custom API
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Wide**: > 1280px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Screen reader optimizations

## 🚀 Performance Optimizations

- CSS Modules for scoped styling
- Intersection Observer for scroll animations
- Optimized asset loading
- Minimal bundle size
- Tree-shaking enabled

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📝 Component Documentation

### Button Component
```typescript
<Button 
  variant="primary" | "secondary" | "outline"
  size="sm" | "md" | "lg"
  fullWidth={boolean}
>
  Button Text
</Button>
```

### Card Component
```typescript
<Card variant="default" | "featured" | "outlined" hoverable>
  <CardHeader icon="🎯">
    <h3>Title</h3>
  </CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer content</CardFooter>
</Card>
```

### SectionTitle Component
```typescript
<SectionTitle 
  title="Section Title"
  subtitle="Optional subtitle"
  align="center" | "left"
  accent={true}
/>
```

## 🎯 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add case studies/portfolio section
- [ ] Integrate analytics
- [ ] Add multi-language support
- [ ] Implement service worker for offline support
- [ ] Add testimonials section
- [ ] Create admin panel for content management

## 🐛 Troubleshooting

### Module Resolution Issues
If you encounter import errors, ensure path aliases are correctly configured in:
- `tsconfig.json`
- `vite.config.ts`

### Style Not Applying
1. Check CSS Module naming (use camelCase)
2. Verify class names match module exports
3. Ensure global styles are imported in `App.tsx`

### Build Errors
1. Run `npm install` to ensure all dependencies are installed
2. Clear cache: `rm -rf node_modules .vite dist && npm install`
3. Check TypeScript errors: `npm run build`

## 📄 License

All rights reserved © 2026 DDM Infotech

## 📞 Support

For questions or support:
- Email: info@ddminfotech.com
- Location: India

---

**Built with ❤️ by DDM Infotech - Automating Growth**
