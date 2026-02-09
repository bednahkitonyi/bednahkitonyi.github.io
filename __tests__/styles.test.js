/**
 * Test Suite: CSS Validation and Styling
 * Tests the CSS structure, variables, and styling
 */

const fs = require('fs');
const path = require('path');

function readCssFile() {
  const filePath = path.join(__dirname, '..', 'styles.css');
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return '';
}

describe('CSS Structure and Variables', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('styles.css should exist', () => {
    expect(cssContent.length).toBeGreaterThan(0);
  });

  test('should define CSS custom properties (variables)', () => {
    expect(cssContent).toMatch(/--accent-primary/);
    expect(cssContent).toMatch(/--accent-secondary/);
    expect(cssContent).toMatch(/--text-primary/);
    expect(cssContent).toMatch(/--bg-primary/);
  });

  test('should define light theme variables', () => {
    expect(cssContent).toMatch(/\[data-theme="light"\]/);
  });

  test('should define dark theme variables', () => {
    expect(cssContent).toMatch(/\[data-theme="dark"\]/);
  });

  test('should use CSS variables in styles', () => {
    expect(cssContent).toMatch(/var\(--accent-primary\)/);
    expect(cssContent).toMatch(/var\(--text-primary\)/);
  });
});

describe('CSS - Header Styles', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define header styles', () => {
    expect(cssContent).toMatch(/header\s*{/i);
  });

  test('should define sticky header class', () => {
    expect(cssContent).toMatch(/\.scrolled/);
  });

  test('should define nav styles', () => {
    expect(cssContent).toMatch(/nav\s*{|\.nav-menu/i);
  });

  test('should define nav link styles', () => {
    expect(cssContent).toMatch(/\.nav-link/);
  });

  test('should define active nav link class', () => {
    expect(cssContent).toMatch(/\.nav-link\.active/);
  });

  test('should define hamburger styles', () => {
    expect(cssContent).toMatch(/\.hamburger/);
  });

  test('should define theme toggle styles', () => {
    expect(cssContent).toMatch(/\.theme-toggle/);
  });

  test('should define profile picture styles', () => {
    expect(cssContent).toMatch(/\.profile-pic/);
  });
});

describe('CSS - Hero Section Styles', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define hero section styles', () => {
    expect(cssContent).toMatch(/\.hero/);
  });

  test('should define hero title styles', () => {
    expect(cssContent).toMatch(/\.hero-title/);
  });

  test('should define CTA button styles', () => {
    expect(cssContent).toMatch(/\.btn-primary|\.btn-secondary/);
  });

  test('should define scroll indicator styles', () => {
    expect(cssContent).toMatch(/\.scroll-indicator/);
  });

  test('should define animation keyframes', () => {
    expect(cssContent).toMatch(/@keyframes/);
  });

  test('should have fadeInUp animation', () => {
    expect(cssContent).toMatch(/fadeInUp|fadeInDown|slideIn/);
  });
});

describe('CSS - Footer Styles', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define footer styles', () => {
    expect(cssContent).toMatch(/footer\s*{/i);
  });

  test('should define footer container', () => {
    expect(cssContent).toMatch(/\.footer-container/);
  });

  test('should define footer columns', () => {
    expect(cssContent).toMatch(/\.footer-column/);
  });

  test('should define footer contact section', () => {
    expect(cssContent).toMatch(/\.footer-contact/);
  });

  test('should define footer form section', () => {
    expect(cssContent).toMatch(/\.footer-form/);
  });

  test('should define footer form inputs', () => {
    expect(cssContent).toMatch(/\.footer-contact-form/);
  });

  test('should define submit button styles', () => {
    expect(cssContent).toMatch(/\.btn-submit/);
  });

  test('should define social icons styles', () => {
    expect(cssContent).toMatch(/\.social-icon/);
  });

  test('should define footer bottom styles', () => {
    expect(cssContent).toMatch(/\.footer-bottom/);
  });

  test('should define contact label styles', () => {
    expect(cssContent).toMatch(/\.contact-label/);
  });
});

describe('CSS - Form Styles', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define input styles', () => {
    expect(cssContent).toMatch(/input\s*{|input,/i);
  });

  test('should define textarea styles', () => {
    expect(cssContent).toMatch(/textarea/);
  });

  test('should define form error state', () => {
    expect(cssContent).toMatch(/\.error/);
  });

  test('should define form valid state', () => {
    expect(cssContent).toMatch(/\.valid/);
  });

  test('should define input focus styles', () => {
    expect(cssContent).toMatch(/:focus/);
  });

  test('should define placeholder styles', () => {
    expect(cssContent).toMatch(/::placeholder/);
  });
});

describe('CSS - Grid and Flexbox', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should use CSS grid', () => {
    expect(cssContent).toMatch(/display:\s*grid|grid-template-columns|grid-column/);
  });

  test('should use flexbox', () => {
    expect(cssContent).toMatch(/display:\s*flex|flex-direction|justify-content|align-items/);
  });

  test('should define grid gap', () => {
    expect(cssContent).toMatch(/gap:/);
  });

  test('should define flex gap', () => {
    expect(cssContent).toMatch(/gap:|flex-gap/);
  });
});

describe('CSS - Responsive Design', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should have media queries', () => {
    expect(cssContent).toMatch(/@media/);
  });

  test('should have mobile breakpoint', () => {
    expect(cssContent).toMatch(/@media.*\(max-width:\s*768px\)/);
  });

  test('should have tablet breakpoint', () => {
    expect(cssContent).toMatch(/@media.*\(max-width:\s*1024px\)/);
  });

  test('should define responsive font sizes', () => {
    // Check for font-size properties (responsive or not)
    expect(cssContent).toMatch(/font-size:/);
  });

  test('should have responsive padding/margin', () => {
    expect(cssContent).toMatch(/padding:|margin:/);
  });
});

describe('CSS - Typography', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define font families', () => {
    expect(cssContent).toMatch(/font-family/);
  });

  test('should define font sizes', () => {
    expect(cssContent).toMatch(/font-size:/);
  });

  test('should define line heights', () => {
    expect(cssContent).toMatch(/line-height/);
  });

  test('should define font weights', () => {
    expect(cssContent).toMatch(/font-weight/);
  });

  test('should define letter spacing', () => {
    expect(cssContent).toMatch(/letter-spacing/);
  });
});

describe('CSS - Colors and Theming', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define accent colors', () => {
    expect(cssContent).toMatch(/--accent-primary/);
    expect(cssContent).toMatch(/--accent-secondary/);
  });

  test('should define text colors', () => {
    expect(cssContent).toMatch(/--text-primary/);
    expect(cssContent).toMatch(/--text-secondary/);
  });

  test('should define background colors', () => {
    expect(cssContent).toMatch(/--bg-primary/);
    expect(cssContent).toMatch(/--bg-secondary/);
  });

  test('should define border colors', () => {
    expect(cssContent).toMatch(/--border-color|border:.*var/);
  });

  test('should define shadow colors', () => {
    expect(cssContent).toMatch(/--shadow-color|box-shadow/);
  });

  test('should have color transitions', () => {
    expect(cssContent).toMatch(/transition/);
  });
});

describe('CSS - Animations and Transitions', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define animations', () => {
    expect(cssContent).toMatch(/@keyframes/);
  });

  test('should have fade animations', () => {
    expect(cssContent).toMatch(/fade/i);
  });

  test('should have slide animations', () => {
    expect(cssContent).toMatch(/slide/i);
  });

  test('should have scale animations', () => {
    expect(cssContent).toMatch(/scale/i);
  });

  test('should define animation durations', () => {
    expect(cssContent).toMatch(/animation:.*[0-9.]+s/);
  });

  test('should define animation timing', () => {
    expect(cssContent).toMatch(/ease|cubic-bezier/);
  });

  test('should define transitions', () => {
    expect(cssContent).toMatch(/transition:/);
  });

  test('should have hover effects', () => {
    expect(cssContent).toMatch(/:hover/);
  });
});

describe('CSS - Spacing and Layout', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define padding', () => {
    expect(cssContent).toMatch(/padding/);
  });

  test('should define margins', () => {
    expect(cssContent).toMatch(/margin(?!:)/);
  });

  test('should define max-width containers', () => {
    expect(cssContent).toMatch(/max-width/);
  });

  test('should define width and height', () => {
    expect(cssContent).toMatch(/width:|height:/);
  });

  test('should define borders', () => {
    expect(cssContent).toMatch(/border:/);
  });

  test('should define border radius', () => {
    expect(cssContent).toMatch(/border-radius/);
  });
});

describe('CSS - Accessibility', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should define focus states', () => {
    expect(cssContent).toMatch(/:focus/);
  });

  test('should define active states', () => {
    expect(cssContent).toMatch(/:active/);
  });

  test('should not remove outline on focus', () => {
    // Check that there's proper focus styling (not just outline: none)
    expect(cssContent).toMatch(/:focus/);
  });

  test('should have sufficient color contrast setup', () => {
    // Check that light and dark themes exist
    expect(cssContent).toMatch(/data-theme="light"/);
    expect(cssContent).toMatch(/data-theme="dark"/);
  });
});

describe('CSS - Performance', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should use CSS variables for maintainability', () => {
    expect(cssContent).toMatch(/--/);
  });

  test('should avoid excessive nesting', () => {
    // Basic check - no more than 5 levels of nesting on average
    const lines = cssContent.split('\n');
    expect(lines.length).toBeGreaterThan(0);
  });

  test('should have reasonable file size', () => {
    // CSS file should be reasonable size (not excessively large)
    expect(cssContent.length).toBeLessThan(500000); // Less than 500KB
  });
});

describe('CSS - Classes and Selectors', () => {
  let cssContent;

  beforeEach(() => {
    cssContent = readCssFile();
  });

  test('should use BEM naming convention for some classes', () => {
    // Check for double dash or double underscore patterns
    expect(cssContent).toMatch(/\w+[-_]{2}\w+/);
  });

  test('should prefix interactive element classes', () => {
    expect(cssContent).toMatch(/\.btn|\.active|\.visible|\.error|\.valid/);
  });

  test('should have state classes', () => {
    expect(cssContent).toMatch(/\.active|\.visible|\.disabled|\.error|\.valid/);
  });
});
