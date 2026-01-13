# DDM Infotech Website - Component Documentation

## Architecture Overview

This project follows a modular, component-based architecture with clear separation of concerns:

- **Components**: Reusable UI elements organized by type (layout, sections, ui, shared)
- **Hooks**: Custom React hooks for shared logic
- **Types**: TypeScript interfaces and type definitions
- **Constants**: Static data and configuration
- **Utils**: Helper functions and utilities
- **Styles**: Global styles, variables, and animations

## Component Catalog

### Layout Components

#### Header
**Location**: `src/components/layout/Header/`

Main site header with fixed positioning, logo, navigation, and CTA button.

**Features**:
- Fixed position with scroll effect
- Responsive navigation with mobile menu
- Smooth scrolling to sections
- Glass morphism effect on scroll

**Props**: None (uses global config)

#### Footer
**Location**: `src/components/layout/Footer/`

Site footer with company information, navigation links, and contact details.

**Features**:
- Three-column layout (responsive)
- Contact information display
- Quick navigation links
- Copyright and branding

**Props**: None (uses global config)

---

### Section Components

#### Hero
**Location**: `src/components/sections/Hero/`

Landing section with main value proposition and CTAs.

**Features**:
- Full viewport height
- Animated trust badges
- Dual CTA buttons
- Animated visual grid
- Scroll indicator

#### Products
**Location**: `src/components/sections/Products/`

Showcase of business solutions and products.

**Features**:
- Responsive grid layout
- Featured product highlighting
- Feature list per product
- Scroll-triggered animations
- Custom solution CTA

**Data Source**: `src/constants/products.data.ts`

#### Industries
**Location**: `src/components/sections/Industries/`

Display of industries served with specialty highlighting.

**Features**:
- Auto-fit grid layout
- Specialty badge for highlighted industries
- Hover effects
- Icon-based visual design

**Data Source**: `src/constants/industries.data.ts`

#### ValueProposition
**Location**: `src/components/sections/ValueProposition/`

Explanation of company values and differentiators.

**Features**:
- Four value pillars
- Founder statement quote
- Dark gradient background
- Glassmorphism cards

**Data Source**: `src/constants/content.data.ts`

#### Approach
**Location**: `src/components/sections/Approach/`

Process timeline and technology philosophy.

**Features**:
- Numbered step timeline
- Visual connectors between steps
- Technology philosophy section
- Feature checklist

**Data Source**: `src/constants/content.data.ts`

#### Clients
**Location**: `src/components/sections/Clients/`

Target client types and trust indicators.

**Features**:
- Client type cards
- Trust point display
- Icon-based visualization

**Data Source**: `src/constants/content.data.ts`

#### Contact
**Location**: `src/components/sections/Contact/`

Contact form and company contact information.

**Features**:
- Validated contact form
- Real-time error display
- Submit state management
- Contact detail display
- Email validation

**Form Fields**:
- Name (required)
- Email (required, validated)
- Company (optional)
- Message (required)

---

### UI Components

#### Button
**Location**: `src/components/ui/Button/`

Reusable button component with multiple variants.

**Props**:
```typescript
{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
  // + all standard button HTML attributes
}
```

**Variants**:
- `primary`: Gold gradient with shadow
- `secondary`: Navy background
- `outline`: Transparent with border

#### Card
**Location**: `src/components/ui/Card/`

Card container with composable sections.

**Components**:
- `Card`: Main container
- `CardHeader`: Header with optional icon
- `CardBody`: Main content area
- `CardFooter`: Footer section

**Props**:
```typescript
Card {
  variant?: 'default' | 'featured' | 'outlined'
  hoverable?: boolean
  className?: string
  children: React.ReactNode
}

CardHeader {
  icon?: string
  children: React.ReactNode
}
```

**Variants**:
- `default`: Standard with shadow
- `featured`: Gold border with badge
- `outlined`: Border only, no shadow

#### SectionTitle
**Location**: `src/components/ui/SectionTitle/`

Consistent section heading component.

**Props**:
```typescript
{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  accent?: boolean
}
```

**Features**:
- Gold accent line (optional)
- Responsive typography
- Flexible alignment

#### TrustBadge
**Location**: `src/components/ui/TrustBadge/`

Small badge for trust indicators.

**Props**:
```typescript
{
  text: string
  icon?: string
}
```

---

### Shared Components

#### Logo
**Location**: `src/components/shared/Logo/`

Company logo with text and tagline.

**Props**:
```typescript
{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}
```

**Features**:
- Scalable sizes
- Color variants for different backgrounds
- Animated hover effect

---

## Custom Hooks

### useScrollAnimation
**Location**: `src/hooks/useScrollAnimation.ts`

Intersection Observer hook for scroll-triggered animations.

**Returns**:
```typescript
{
  ref: React.RefObject<HTMLDivElement>
  isVisible: boolean
}
```

**Usage**:
```typescript
const { ref, isVisible } = useScrollAnimation()

<div ref={ref} className={isVisible ? 'animate-slide-up' : ''}>
  Content
</div>
```

### useResponsive
**Location**: `src/hooks/useResponsive.ts`

Responsive breakpoint detection hook.

**Returns**:
```typescript
{
  breakpoint: 'mobile' | 'tablet' | 'desktop' | 'wide'
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}
```

---

## Styling Guidelines

### CSS Modules
All component styles use CSS Modules for scoped styling.

**Naming Convention**:
```css
/* File: Component.module.css */
.componentName { }
.elementName { }
.modifierName { }
```

**Usage in Component**:
```typescript
import styles from './Component.module.css'

<div className={styles.componentName}>
  <div className={styles.elementName}></div>
</div>
```

### CSS Variables
All design tokens are defined in `src/styles/variables.css`.

**Categories**:
- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Transitions
- Z-index

**Usage**:
```css
.element {
  color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
}
```

### Animation Classes
Pre-defined animation classes in `src/styles/animations.css`:

- `animate-fade-in`
- `animate-slide-up`
- `animate-slide-in-left`
- `animate-slide-in-right`
- `animate-scale-in`
- `hover-lift`
- `hover-gold-glow`

**Stagger Delays**:
- `animate-delay-100` through `animate-delay-500`

---

## Data Management

### Product Data
**File**: `src/constants/products.data.ts`

Add new products by extending the `PRODUCTS` array:
```typescript
{
  id: 'unique-id',
  title: 'Product Name',
  description: 'Short description',
  features: ['Feature 1', 'Feature 2'],
  isFeatured: false,
  icon: '🎯',
}
```

### Industry Data
**File**: `src/constants/industries.data.ts`

Add industries:
```typescript
{
  id: 'industry-id',
  name: 'Industry Name',
  description: 'Description',
  isHighlighted: false,
  icon: '🏪',
}
```

### Content Data
**File**: `src/constants/content.data.ts`

Contains:
- Value pillars
- Process steps
- Client types

### Site Configuration
**File**: `src/constants/site.config.ts`

Global site settings:
- Company name
- Tagline
- Contact information
- Navigation items
- Social links

---

## Type Definitions

### Product Types
**File**: `src/types/product.types.ts`

```typescript
interface Product {
  id: string
  title: string
  description: string
  features: string[]
  isFeatured?: boolean
  icon?: string
  link?: string
}
```

### Section Types
**File**: `src/types/section.types.ts`

Interfaces for:
- `Industry`
- `ValuePillar`
- `ProcessStep`
- `ClientType`
- `ContactFormData`

---

## Utilities

### Scroll Utilities
**File**: `src/utils/scroll.ts`

- `scrollToSection(sectionId: string)`: Smooth scroll to section
- `getScrollProgress()`: Get scroll percentage

### Validation Utilities
**File**: `src/utils/validation.ts`

- `validateEmail(email: string)`: Email format validation
- `validatePhoneNumber(phone: string)`: Phone validation
- `formatEmail(email: string)`: Email formatting

---

## Best Practices

### Component Creation
1. Create directory with component name
2. Add `.tsx`, `.module.css`, and `index.ts` files
3. Use TypeScript interfaces for props
4. Export from index file

### Styling
1. Use CSS Modules for all component styles
2. Reference CSS variables for design tokens
3. Follow BEM-like naming in CSS
4. Use responsive breakpoints from variables

### Type Safety
1. Define interfaces for all props
2. Use strict TypeScript mode
3. Avoid `any` type
4. Export types for reusability

### Performance
1. Use `React.memo()` for expensive components
2. Implement lazy loading for below-fold content
3. Optimize images
4. Minimize re-renders

---

## Adding New Features

### Adding a Section
1. Create section directory in `src/components/sections/`
2. Implement component with TypeScript
3. Create scoped CSS Module
4. Add data to constants if needed
5. Import and add to `App.tsx`
6. Add navigation link in `site.config.ts`

### Adding a UI Component
1. Create component directory in `src/components/ui/`
2. Define prop interface
3. Implement component logic
4. Style with CSS Module
5. Export from index file
6. Document in this file

### Extending Types
1. Add interface to appropriate type file
2. Export from file
3. Use in components
4. Update documentation

---

## Maintenance Checklist

### Regular Updates
- [ ] Review and update product data
- [ ] Check and update industry data
- [ ] Verify contact information
- [ ] Test form submissions
- [ ] Update copyright year
- [ ] Check for broken links
- [ ] Test responsive design
- [ ] Verify accessibility

### Performance Monitoring
- [ ] Check Lighthouse scores
- [ ] Monitor bundle size
- [ ] Test loading times
- [ ] Verify animation performance

### Code Quality
- [ ] Run linter regularly
- [ ] Format code with Prettier
- [ ] Review TypeScript errors
- [ ] Update dependencies

---

**Last Updated**: January 2026
