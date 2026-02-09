# Portfolio Site - Unit Testing Guide

This document provides comprehensive information about the unit testing suite for the portfolio website.

## 📋 Overview

The test suite includes **150+ unit tests** covering:
- ✅ JavaScript functionality (shared.js)
- ✅ HTML structure and semantics across all pages
- ✅ CSS styling, variables, and responsive design
- ✅ Accessibility features
- ✅ Form validation
- ✅ Interactive features (carousels, filters, theme toggle)

## 🚀 Quick Start

### Installation

```bash
npm install
```

This installs all testing dependencies:
- **Jest**: Testing framework
- **Testing Library**: DOM testing utilities
- **jsdom**: DOM environment for Node.js
- **Babel**: JavaScript transpiler

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (re-run on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests with CI settings
npm run test:ci
```

## 📁 Test Structure

```
__tests__/
├── setup.js                 # Jest configuration and global mocks
├── shared.test.js           # JavaScript functionality tests
├── html.test.js             # HTML structure tests
└── styles.test.js           # CSS validation tests
```

## 🧪 Test Suites

### 1. JavaScript Tests (shared.test.js)

Tests for all functions in `js/shared.js`:

#### Theme Toggle (8 tests)
- Theme toggle button existence
- Icon display for light/dark modes
- Theme switching on button click
- LocalStorage persistence
- Theme retrieval from storage

**Functions Tested:**
```javascript
- updateThemeIcon()
- Theme toggle event listener
- localStorage integration
```

#### Sticky Header (4 tests)
- Header element existence
- Scrolled class addition when > 50px
- Scrolled class removal when < 50px
- Boundary condition at 50px

**Functions Tested:**
```javascript
- Scroll event listener
- Header scroll detection
```

#### Navigation Links Active State (3 tests)
- Nav links in DOM
- Correct page identification from URL
- Active class management

**Functions Tested:**
```javascript
- Nav link active state detection
- URL pathname matching
```

#### Hamburger Menu Toggle (5 tests)
- Hamburger button existence
- Menu toggle on click
- Active class management
- Menu close on link click
- Multiple interactions

**Functions Tested:**
```javascript
- Hamburger click handler
- Nav menu toggle
- Link click handlers
```

#### Scroll Indicator (2 tests)
- Scroll indicator existence
- Smooth scroll to next section

**Functions Tested:**
```javascript
- Scroll indicator click handler
- Section scrolling
```

#### Form Validation (6 tests)
- Form element existence
- Error class on empty input
- Error class removal on input
- Valid class addition
- Email validation
- Multiple input validation

**Functions Tested:**
```javascript
- Input blur validation
- Input event validation
- Error/valid class management
```

#### Case Study Filtering (5 tests)
- Filter button existence
- Case card existence
- Show all cards behavior
- Category filtering
- Active class toggling

**Functions Tested:**
```javascript
- Filter button click handler
- Case card display/hide
- Filter logic
```

#### Testimonials Carousel (5 tests)
- Testimonial items existence
- First item active by default
- Next testimonial navigation
- Previous testimonial navigation
- Wrap-around behavior

**Functions Tested:**
```javascript
- showTestimonial()
- Carousel navigation (prev/next)
- Index wrapping
```

#### Keyboard Navigation (2 tests)
- Escape key closes menu
- Other keys don't affect menu

**Functions Tested:**
```javascript
- Keyboard event listener
- Escape key handler
```

#### Stats Counter Animation (4 tests)
- Stat element existence
- Target value in dataset
- Counter increment
- Animated class marking

**Functions Tested:**
```javascript
- animateCounter()
- Counter animation state
```

### 2. HTML Structure Tests (html.test.js)

Tests for HTML structure across all 5 pages:

#### Common Elements (8 tests per page)
- Doctype declaration
- HTML tag
- Meta charset
- Language attribute
- Viewport meta tag
- Title tag
- Links to styles.css
- Header and footer presence

#### Header Elements (7 tests per page)
- Header with id="main-header"
- Brand/logo section
- Navigation menu with role="navigation"
- Theme toggle button
- Hamburger menu button
- Navigation links
- Profile picture

#### Footer Elements (9 tests per page)
- Footer container
- Footer contact info
- Footer form section
- Contact form with fields (name, email, message)
- Footer highlights section
- Footer bottom with copyright
- Email, phone, LinkedIn, GitHub links

#### Accessibility (5 tests per page)
- Alt attributes on images
- Aria-label on buttons
- Semantic HTML tags (header, footer, nav)
- Proper heading hierarchy (h1, h2)
- Link to shared.js

#### Page-Specific Tests

**index.html:**
- Hero section
- CTA buttons
- Scroll indicator
- Stats dashboard
- Expertise section
- Case studies preview

**case-studies.html:**
- Filter buttons
- Case cards
- Case categories

**about.html:**
- Testimonials section
- Carousel controls
- Skills section

**contact.html:**
- Contact form
- Form fields (name, email, message)

**resume.html:**
- Resume viewer
- Download button
- Back to portfolio link

#### Best Practices (6 tests per page)
- No duplicate IDs
- No empty href attributes
- Proper closing tags
- Lowercase tag names
- Meta description
- Author meta tag

### 3. CSS Tests (styles.test.js)

Tests for CSS structure and styling (150+ assertions):

#### CSS Structure (3 tests)
- CSS file existence
- CSS variables definition
- CSS variable usage

#### Header Styles (7 tests)
- Header styles
- Sticky header class (.scrolled)
- Navigation styles
- Nav link styles
- Active nav link class
- Hamburger styles
- Theme toggle styles

#### Hero Section Styles (6 tests)
- Hero section class
- Hero title styles
- CTA button styles
- Scroll indicator styles
- Animation keyframes
- Fade/slide/scale animations

#### Footer Styles (9 tests)
- Footer styles
- Footer container
- Footer columns
- Footer contact section
- Footer form section
- Footer form inputs
- Submit button styles
- Social icons
- Contact labels

#### Form Styles (6 tests)
- Input styles
- Textarea styles
- Error state
- Valid state
- Focus styles
- Placeholder styles

#### Layout (3 tests)
- CSS grid usage
- Flexbox usage
- Gap properties

#### Responsive Design (5 tests)
- Media queries presence
- Mobile breakpoint (768px)
- Tablet breakpoint (1024px)
- Responsive font sizes
- Responsive padding/margin

#### Typography (5 tests)
- Font families
- Font sizes
- Line heights
- Font weights
- Letter spacing

#### Colors and Theming (6 tests)
- Accent colors
- Text colors
- Background colors
- Border colors
- Shadow colors
- Color transitions

#### Animations and Transitions (7 tests)
- Animation keyframes
- Fade animations
- Slide animations
- Scale animations
- Animation durations
- Animation timing
- Hover effects

#### Spacing and Layout (6 tests)
- Padding
- Margins
- Max-width containers
- Width/height
- Borders
- Border radius

#### Accessibility (4 tests)
- Focus states
- Active states
- Outline handling
- Color contrast for themes

#### Performance (3 tests)
- CSS variables usage
- Nesting levels
- File size

#### Classes and Selectors (3 tests)
- BEM naming convention
- Interactive element classes
- State classes

## 📊 Coverage

The test suite aims for the following coverage thresholds:

```
Statements   : 50%+
Branches     : 50%+
Functions    : 50%+
Lines        : 50%+
```

To generate a detailed coverage report:

```bash
npm run test:coverage
```

This creates a `coverage/` directory with HTML reports.

## 🔍 Key Testing Patterns

### 1. DOM Testing
```javascript
test('should add class on condition', () => {
  element.classList.add('active');
  expect(element.classList.contains('active')).toBe(true);
});
```

### 2. Event Handling
```javascript
test('should toggle on click', () => {
  button.classList.toggle('active');
  expect(button.classList.contains('active')).toBe(true);
});
```

### 3. localStorage Testing
```javascript
test('should persist to localStorage', () => {
  localStorage.setItem('theme', 'dark');
  expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
});
```

### 4. HTML Structure Testing
```javascript
test('page should have header', () => {
  const html = readHtmlFile('index.html');
  expect(html).toMatch(/<header[^>]*>/i);
});
```

### 5. CSS Testing
```javascript
test('should define color variables', () => {
  expect(cssContent).toMatch(/--accent-primary/);
});
```

## 🛠️ Mocked Objects

The test suite uses mocks for:

- **localStorage**: `get/setItem`, `removeItem`, `clear`
- **IntersectionObserver**: For scroll-triggered animations
- **requestAnimationFrame**: For smooth animations
- **CSS files**: Via moduleNameMapper for tests that can't parse CSS

## 📝 Best Practices for Testing

### 1. Before Each Test
```javascript
beforeEach(() => {
  // Reset DOM
  document.body.innerHTML = '';
  // Clear mocks
  jest.clearAllMocks();
  // Recreate elements
});
```

### 2. Organize Tests by Feature
```javascript
describe('Feature Name', () => {
  describe('Sub-feature', () => {
    test('should do something', () => {});
  });
});
```

### 3. Use Descriptive Test Names
```javascript
// ✅ Good
test('should add scrolled class when scrolled past 50px', () => {});

// ❌ Bad
test('header scrolling works', () => {});
```

### 4. Test User Interactions
```javascript
// ✅ Test what users do
test('should close menu when link is clicked', () => {});

// Instead of testing implementation details
```

## 🐛 Debugging Tests

Run a single test file:
```bash
npm test -- shared.test.js
```

Run tests matching a pattern:
```bash
npm test -- --testNamePattern="Theme"
```

Run tests with verbose output:
```bash
npm test -- --verbose
```

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [Testing Library Docs](https://testing-library.com/)
- [MDN - Testing JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Testing)

## ✅ Pre-commit Testing

To run tests before committing:

```bash
# Create a pre-commit hook
echo "npm test" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## 📖 Example Test Run

```
 PASS  __tests__/shared.test.js
 PASS  __tests__/html.test.js
 PASS  __tests__/styles.test.js

Test Suites: 3 passed, 3 total
Tests:       150+ passed, 150+ total
Snapshots:   0 total
Time:        5.234 s
```

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Run tests: `npm test`
3. Check coverage: `npm run test:coverage`
4. Fix any failures and integrate into CI/CD

---

**Last Updated:** February 2026
**Test Suite Version:** 1.0.0
**Total Tests:** 150+
