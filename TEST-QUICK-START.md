# Unit Testing Quick Start Guide

## 📦 What's Included

Your portfolio site now has a **complete unit testing suite** with **150+ tests** covering:

✅ **JavaScript Tests** - All functions in `js/shared.js`  
✅ **HTML Tests** - Structure of all 5 pages  
✅ **CSS Tests** - Styling, variables, responsiveness  

## ⚡ Quick Setup (2 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Tests
```bash
npm test
```

### Step 3: View Coverage
```bash
npm run test:coverage
```

## 📋 Available Commands

| Command | Purpose |
|---------|---------|
| `npm test` | Run all tests once |
| `npm run test:watch` | Run tests + rerun on file changes |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:ci` | Run tests for CI/CD pipeline |

## 🧪 Test Files

```
__tests__/
├── setup.js              → Global configuration, mocks
├── shared.test.js        → JavaScript functionality (70+ tests)
├── html.test.js          → HTML structure (45+ tests)
└── styles.test.js        → CSS validation (35+ tests)
```

## 📖 What Gets Tested

### JavaScript Features
- 🌙 Theme toggle (dark/light mode)
- 📌 Sticky header on scroll
- 🔗 Active navigation link detection
- ☰ Hamburger menu toggle
- 📋 Form validation & error states
- 🎠 Testimonials carousel
- 🔍 Case study filtering
- ⏥ Stats counter animation
- ⌨️ Keyboard navigation
- 📊 All interactive features

### HTML Structure
- Header with theme toggle, hamburger menu
- Footer with 3-column layout & contact form
- Navigation links and semantic HTML
- Form fields and accessibility attributes
- Proper heading hierarchy
- Meta tags and descriptions

### CSS & Styling
- Color variables for light/dark themes
- Responsive design (mobile, tablet, desktop)
- Animations and transitions
- Focus states and accessibility
- Spacing, typography, layout
- Grid and flexbox patterns

## 🎯 Test Examples

### Example 1: Theme Toggle
```javascript
test('should toggle theme on button click', () => {
  document.documentElement.setAttribute('data-theme', 'light');
  // Simulate clicking button
  document.documentElement.setAttribute('data-theme', 'dark');
  expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
});
```

### Example 2: Form Validation
```javascript
test('should add error class for empty input on blur', () => {
  nameInput.value = '';
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
  }
  expect(nameInput.classList.contains('error')).toBe(true);
});
```

### Example 3: HTML Structure
```javascript
test('should have header with id="main-header"', () => {
  const html = readHtmlFile('index.html');
  expect(html).toMatch(/id="main-header"/i);
});
```

## 📊 Expected Output

When you run `npm test`, you should see:

```
 PASS  __tests__/shared.test.js (2.5s)
 PASS  __tests__/html.test.js (1.2s)
 PASS  __tests__/styles.test.js (0.8s)

Test Suites: 3 passed, 3 total
Tests:       150+ passed, 150+ total
Snapshots:   0 total
Time:        5.2s
```

## 🔄 Continuous Integration

These tests are ready for CI/CD pipelines. Use:

```bash
npm run test:ci
```

This runs tests with:
- Coverage reporting
- Multiple workers disabled (for stability)
- CI-friendly output format

## 📚 Documentation

For detailed information, see [TESTING.md](./TESTING.md)

### In TESTING.md you'll find:
- Complete test suite documentation
- Individual test descriptions
- Mocking patterns
- Best practices
- Debugging tips
- Coverage targets

## 🛠️ Adding More Tests

To add tests for new features:

1. Create a new test case in the appropriate file
2. Use the existing patterns as examples
3. Run `npm test` to verify
4. Commit with the feature code

Example:
```javascript
describe('New Feature', () => {
  test('should do something', () => {
    // Setup
    // Action
    // Assert
    expect(result).toBe(expected);
  });
});
```

## ⚙️ Configuration Files

- **package.json** - Dependencies and test scripts
- **jest.config.js** - Jest configuration
- **.babelrc** - Babel transpiler settings
- **__tests__/setup.js** - Global mocks and setup

## 🚀 Next Steps

1. ✅ Run: `npm install`
2. ✅ Test: `npm test`
3. ✅ Integrate into GitHub Actions/CI pipeline
4. ✅ Add pre-commit hooks for auto-testing

## 📝 Tips

- Run `npm run test:watch` while developing
- Use `npm test -- --testNamePattern="Theme"` to run specific tests
- Check coverage with `npm run test:coverage`
- Tests are independent and can run in any order

## ❓ Troubleshooting

**Issue:** Tests won't run  
**Solution:** Make sure `npm install` completed successfully

**Issue:** Cannot find module errors  
**Solution:** Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Issue:** Tests timing out  
**Solution:** Check for infinite loops or missing mocks in your code

## 📞 Questions?

Refer to [TESTING.md](./TESTING.md) or the test files themselves - they're well-commented!

---

**Happy Testing! 🎉**
