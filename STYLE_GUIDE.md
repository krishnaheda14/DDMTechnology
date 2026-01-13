# DDM Infotech Website - Style Guide

## Brand Identity

### Company Name
**DDM Infotech**

### Tagline
**"Automating Growth"**

### Brand Values
- Innovation
- Excellence
- Accountability
- Scalability

---

## Color System

### Primary Colors

#### Midnight Navy
- **Hex**: `#0A1A2F`
- **RGB**: `rgb(10, 26, 47)`
- **Use**: Primary backgrounds, text, branding
- **Accessibility**: AAA on white

#### Metallic Gold
- **Hex**: `#D4AF37`
- **RGB**: `rgb(212, 175, 55)`
- **Use**: Accents, CTAs, highlights
- **Accessibility**: AA on navy

### Secondary Colors

#### Ice Grey
- **Hex**: `#AEB7C2`
- **RGB**: `rgb(174, 183, 194)`
- **Use**: Secondary text, borders
- **Accessibility**: AA on navy

#### Charcoal
- **Hex**: `#1C1C1C`
- **RGB**: `rgb(28, 28, 28)`
- **Use**: Alternative dark backgrounds

#### Off White
- **Hex**: `#F8F9FA`
- **RGB**: `rgb(248, 249, 250)`
- **Use**: Light backgrounds, alternating sections

### Color Usage Guidelines

1. **Backgrounds**
   - Primary: Midnight Navy for hero and dark sections
   - Secondary: Off White for alternating sections
   - Accent: Light gold gradients for special cards

2. **Text**
   - Headings: Midnight Navy on light, White on dark
   - Body: Navy on light, Ice Grey on dark
   - Links: Gold on hover

3. **Interactive Elements**
   - Primary CTA: Gold gradient
   - Secondary CTA: Navy solid
   - Hover states: Gold accents

4. **Borders & Dividers**
   - Default: Ice Grey
   - Emphasis: Gold
   - Subtle: rgba(white/black, 0.1)

---

## Typography

### Font Families

#### Headings
**Playfair Display**
- Weight: 600 (Semibold), 700 (Bold), 800 (Extrabold)
- Use: All headings (h1-h6), logo text
- Character: Elegant, luxurious, professional

#### Body Text
**Inter**
- Weight: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Use: Body text, buttons, navigation
- Character: Clean, modern, highly readable

#### Code/Technical
**Monaco**
- Weight: 400 (Regular)
- Use: Technical content, code snippets
- Character: Monospace, clear

### Font Scale

```
--font-size-xs:   0.75rem   (12px)
--font-size-sm:   0.875rem  (14px)
--font-size-base: 1rem      (16px)
--font-size-lg:   1.125rem  (18px)
--font-size-xl:   1.25rem   (20px)
--font-size-2xl:  1.5rem    (24px)
--font-size-3xl:  1.875rem  (30px)
--font-size-4xl:  2.25rem   (36px)
--font-size-5xl:  3rem      (48px)
--font-size-6xl:  3.75rem   (60px)
```

### Typography Hierarchy

#### H1 - Hero Headlines
- Font: Playfair Display Bold
- Size: 48px - 60px (responsive)
- Line Height: 1.1
- Color: Navy or White
- Use: Main hero headline only

#### H2 - Section Titles
- Font: Playfair Display Bold
- Size: 30px - 48px (responsive)
- Line Height: 1.2
- Color: Navy or Gold
- Use: Major section headings

#### H3 - Subsection Titles
- Font: Playfair Display Bold
- Size: 24px - 36px (responsive)
- Line Height: 1.2
- Color: Navy
- Use: Card titles, subsections

#### H4-H6 - Minor Headings
- Font: Playfair Display Semibold
- Size: 18px - 24px (responsive)
- Line Height: 1.3
- Use: Smaller content divisions

#### Body Text
- Font: Inter Regular
- Size: 16px
- Line Height: 1.6
- Color: Navy or Ice Grey
- Use: All body content

#### Small Text
- Font: Inter Regular
- Size: 14px
- Line Height: 1.5
- Color: Ice Grey
- Use: Captions, labels, meta info

---

## Spacing System

Based on **8px grid system**:

```
--spacing-xs:   8px
--spacing-sm:   16px
--spacing-md:   24px
--spacing-lg:   32px
--spacing-xl:   48px
--spacing-2xl:  64px
--spacing-3xl:  96px
--spacing-4xl:  128px
```

### Spacing Guidelines

1. **Component Internal Spacing**
   - Padding: Use sm-md
   - Gaps: Use xs-sm

2. **Section Spacing**
   - Top/Bottom: Use 3xl-4xl
   - Between elements: Use xl-2xl

3. **Layout Margins**
   - Container: Use xl
   - Grid gaps: Use lg-xl

---

## Components

### Buttons

#### Primary Button
- Background: Gold gradient
- Text: Navy
- Hover: Lift + enhanced shadow
- Size: sm (mobile), md (tablet), lg (desktop)

#### Secondary Button
- Background: Navy solid
- Text: White
- Hover: Lighter navy

#### Outline Button
- Background: Transparent
- Border: Navy 2px
- Text: Navy
- Hover: Filled navy

### Cards

#### Default Card
- Background: White
- Shadow: Medium
- Border: None
- Hover: Lift effect

#### Featured Card
- Background: Light gold gradient
- Border: 2px gold
- Badge: "FEATURED"
- Shadow: Gold glow

#### Outlined Card
- Background: White
- Border: 1px grey
- Shadow: None

### Badges

#### Trust Badge
- Background: Light gold (10% opacity)
- Border: 1px gold
- Text: Navy
- Padding: 8px 16px
- Border Radius: Full (pill shape)

---

## Iconography

### Style
- Use emoji icons for simplicity and color
- Consistent size: 48px-60px for section icons
- 24px-32px for card icons

### Suggested Icons
- 💎 Jewelry/Premium
- 🎯 Targeting/Goals
- 🏢 Enterprise/Business
- 🤖 AI/Automation
- 🔒 Security
- ⚡ Performance
- 📈 Growth/Analytics
- 🤝 Partnership
- ✓ Success/Check
- 👔 Professional

---

## Animations & Transitions

### Duration
- Fast: 150ms (micro-interactions)
- Base: 300ms (standard transitions)
- Slow: 500ms (complex animations)

### Easing
- Standard: `ease`
- Smooth: `cubic-bezier(0.4, 0, 0.2, 1)`

### Animation Types

#### Scroll Animations
- Fade In: Opacity 0 → 1
- Slide Up: TranslateY(30px) → 0
- Scale In: Scale(0.9) → 1

#### Hover Effects
- Lift: TranslateY(-5px) + enhanced shadow
- Gold Glow: Box-shadow with gold tint
- Border Highlight: Border color change

#### Interactive States
- Focus: 2px gold outline
- Active: Slight press effect
- Disabled: 50% opacity

---

## Layout Guidelines

### Grid System
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns
- Wide: Up to 4 columns

### Container
- Max Width: 1536px (2xl)
- Padding: Responsive (md → lg → xl)
- Centered with auto margins

### Breakpoints
```
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  1024px - 1280px
Wide:     > 1280px
```

### Section Patterns

#### Full-Width Sections
- Hero
- Value Proposition
- Contact

#### Contained Sections
- Products
- Industries
- Approach
- Clients

#### Alternating Backgrounds
- White → Off-White → Navy gradient → repeat

---

## Imagery Guidelines

### Photography Style
- Professional business imagery
- High quality, high resolution
- Modern, clean aesthetic
- Avoid stock photo clichés

### Image Treatment
- Subtle overlays for text legibility
- Consistent aspect ratios
- Optimized file sizes
- Responsive srcset

### Placeholder Guidelines
- Use solid colors or gradients
- Icon-based illustrations
- Abstract geometric patterns

---

## Accessibility

### Color Contrast
- Body text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Clear focus states

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Skip links where appropriate

### Screen Readers
- Semantic HTML
- ARIA labels on icons
- Alt text on images
- Descriptive link text

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives
- Non-essential animations only

---

## Voice & Tone

### Brand Voice
- **Professional**: Expert, knowledgeable
- **Confident**: Assured, capable
- **Sophisticated**: Refined, elegant
- **Direct**: Clear, no-nonsense

### Messaging Principles
1. Lead with value
2. Be specific, not vague
3. Use active voice
4. Emphasize outcomes
5. Build trust through transparency

### Writing Style
- Short sentences
- Clear technical explanations
- Founder perspective
- Business-focused language
- Avoid jargon unless necessary

---

## Do's and Don'ts

### Colors
✅ Use gold sparingly for impact  
✅ Maintain contrast ratios  
✅ Use navy as primary brand color  
❌ Don't use too many colors  
❌ Don't use pure black  
❌ Don't overuse gold  

### Typography
✅ Use heading hierarchy properly  
✅ Maintain consistent line heights  
✅ Use font weights purposefully  
❌ Don't use more than 2 font families  
❌ Don't use all caps excessively  
❌ Don't set body text too small  

### Layout
✅ Use consistent spacing  
✅ Align elements properly  
✅ Create clear visual hierarchy  
❌ Don't crowd content  
❌ Don't center-align body text  
❌ Don't break the grid arbitrarily  

### Components
✅ Reuse existing components  
✅ Maintain consistency  
✅ Follow established patterns  
❌ Don't create one-off styles  
❌ Don't ignore hover states  
❌ Don't forget mobile responsiveness  

---

## Brand Assets

### Logo Usage
- Minimum size: 120px width
- Clear space: 20px all sides
- Always use high-resolution
- Don't distort or rotate
- Don't add effects

### Logo Variations
- Light version: On dark backgrounds
- Dark version: On light backgrounds
- Monochrome: When color unavailable

---

## File Naming Conventions

### Images
- Format: `section-element-variant.ext`
- Example: `hero-background-mobile.jpg`
- Use lowercase with hyphens

### Components
- Format: `ComponentName.tsx`
- Styles: `ComponentName.module.css`
- Index: `index.ts`

### Constants
- Format: `dataType.data.ts`
- Example: `products.data.ts`
- Use camelCase for files

---

**Document Version**: 1.0  
**Last Updated**: January 2026  
**Maintained By**: DDM Infotech
