# Contributing to DDM Infotech Website

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and constructive
- Focus on what is best for the project
- Show empathy towards other contributors
- Accept constructive criticism gracefully

## Getting Started

1. **Fork the repository** (if external contributor)
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/DDMTechnology.git
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Setup
```bash
npm install
npm run dev
```

### 2. Make Changes
- Follow existing code style
- Use TypeScript types
- Add comments for complex logic
- Keep components focused and reusable

### 3. Test Your Changes
- Test on multiple browsers
- Verify responsive design
- Check accessibility
- Run linter: `npm run lint`
- Build successfully: `npm run build`

### 4. Commit
Follow conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Example:**
```bash
git commit -m "feat(products): add filtering functionality"
```

### 5. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Code Style Guidelines

### TypeScript
- Use interfaces over types when possible
- Avoid `any` type
- Use meaningful variable names
- Add JSDoc comments for complex functions

```typescript
/**
 * Validates email format
 * @param email - The email string to validate
 * @returns boolean indicating if email is valid
 */
export const validateEmail = (email: string): boolean => {
  // implementation
}
```

### React Components
- Use functional components with hooks
- Keep components under 200 lines
- Extract complex logic to hooks
- Use meaningful component names

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  onClick,
  children 
}) => {
  // implementation
}
```

### CSS Modules
- Use camelCase for class names
- Keep selectors flat
- Use CSS variables for design tokens

```css
.container {
  padding: var(--spacing-md);
}

.containerLarge {
  padding: var(--spacing-lg);
}
```

### File Organization
- One component per file
- Co-locate styles with components
- Group related files in folders

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.module.css
├── ComponentName.test.tsx (optional)
└── index.ts
```

## Adding New Features

### Adding a Component
1. Create component folder in appropriate directory
2. Create `.tsx`, `.module.css`, and `index.ts` files
3. Define TypeScript interfaces for props
4. Implement component logic
5. Style with CSS Module
6. Export from index.ts
7. Update documentation

### Adding Data
1. Add to appropriate constant file
2. Update TypeScript types if needed
3. Test data display in UI

### Adding a Section
1. Create section in `src/components/sections/`
2. Follow existing section patterns
3. Add to App.tsx
4. Update navigation if needed
5. Update documentation

## Testing

### Manual Testing Checklist
- [ ] Component renders correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] Passes Lighthouse audit

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation

### When to Update Docs
- Adding new features
- Changing existing features
- Fixing bugs that affect usage
- Adding or removing dependencies

### Documentation Files to Update
- `README.md` - Overview and installation
- `DOCUMENTATION.md` - Component details
- `STYLE_GUIDE.md` - Design decisions
- `CHANGELOG.md` - Version history

## Pull Request Guidelines

### Before Submitting
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No linting errors
- [ ] Build succeeds
- [ ] Tested on multiple devices
- [ ] PR description is clear

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on multiple browsers
```

## Reporting Bugs

### Bug Report Template
```markdown
**Describe the bug**
Clear description of what the bug is

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- Browser: [e.g., Chrome 90]
- Device: [e.g., iPhone 12]
- OS: [e.g., iOS 14]
```

## Feature Requests

### Feature Request Template
```markdown
**Is your feature related to a problem?**
Clear description of the problem

**Describe the solution**
What you'd like to happen

**Alternatives considered**
Other solutions you've considered

**Additional context**
Any other information
```

## Review Process

1. **Automated Checks**
   - Linting passes
   - Build succeeds
   - Type checking passes

2. **Code Review**
   - Logic is sound
   - Follows conventions
   - Performance considerations
   - Security considerations

3. **Testing**
   - Feature works as expected
   - No regressions
   - Responsive design maintained

4. **Merge**
   - Approved by maintainer
   - Passes all checks
   - Merged to main branch

## Questions?

For questions or clarifications:
- Open an issue on GitHub
- Email: info@ddminfotech.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to DDM Infotech! 🙏
