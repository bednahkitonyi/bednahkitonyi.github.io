/**
 * Test Suite: HTML Structure Validation
 * Tests the HTML structure across all pages of the portfolio
 */

const fs = require('fs');
const path = require('path');

/**
 * Helper function to read HTML files
 */
function readHtmlFile(filename) {
  const filePath = path.join(__dirname, '..', filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return '';
}

const pages = [
  { name: 'index.html', title: 'Home Page' },
  { name: 'case-studies.html', title: 'Case Studies' },
  { name: 'about.html', title: 'About Page' },
  { name: 'contact.html', title: 'Contact Page' },
  { name: 'resume.html', title: 'Resume Page' }
];

describe('HTML Structure - Common Elements', () => {
  // Test that all pages have basic HTML structure
  pages.forEach(page => {
    describe(page.title, () => {
      let htmlContent;
      let doc;

      beforeEach(() => {
        htmlContent = readHtmlFile(page.name);
        // Parse HTML using DOMParser (jsdom)
        const parser = new DOMParser();
        doc = parser.parseFromString(htmlContent, 'text/html');
      });

      test(`${page.name} should exist`, () => {
        expect(htmlContent.length).toBeGreaterThan(0);
      });

      test(`${page.name} should have DOCTYPE`, () => {
        expect(htmlContent).toMatch(/<!DOCTYPE html>/i);
      });

      test(`${page.name} should have html tag`, () => {
        expect(htmlContent).toMatch(/<html[^>]*>/i);
      });

      test(`${page.name} should have meta charset`, () => {
        expect(htmlContent).toMatch(/charset="UTF-8"/i);
      });

      test(`${page.name} should have language attribute`, () => {
        expect(htmlContent).toMatch(/lang="en"/i);
      });

      test(`${page.name} should have viewport meta tag`, () => {
        expect(htmlContent).toMatch(/name="viewport"/i);
        expect(htmlContent).toMatch(/width=device-width/i);
        expect(htmlContent).toMatch(/initial-scale=1/i);
      });

      test(`${page.name} should have title tag`, () => {
        const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
        expect(titleMatch).not.toBeNull();
        expect(titleMatch[1].length).toBeGreaterThan(0);
      });

      test(`${page.name} should link to styles.css`, () => {
        expect(htmlContent).toMatch(/href="styles\.css"/i);
      });

      test(`${page.name} should have header`, () => {
        expect(htmlContent).toMatch(/<header[^>]*>/i);
      });

      test(`${page.name} should have footer`, () => {
        expect(htmlContent).toMatch(/<footer[^>]*>/i);
      });

      test(`${page.name} should have main content area`, () => {
        expect(htmlContent).toMatch(/<main[^>]*>|<section[^>]*>/i);
      });
    });
  });
});

describe('HTML Structure - Header Elements', () => {
  pages.forEach(page => {
    describe(`Header - ${page.title}`, () => {
      let htmlContent;

      beforeEach(() => {
        htmlContent = readHtmlFile(page.name);
      });

      test('should have header with id="main-header"', () => {
        expect(htmlContent).toMatch(/id="main-header"/i);
      });

      test('should have brand/logo section', () => {
        expect(htmlContent).toMatch(/class="brand"/i);
      });

      test('should have navigation menu', () => {
        expect(htmlContent).toMatch(/class="nav-menu"/i);
        expect(htmlContent).toMatch(/role="navigation"/i);
      });

      test('should have theme toggle button', () => {
        expect(htmlContent).toMatch(/id="theme-toggle"/i);
        expect(htmlContent).toMatch(/class="theme-toggle"/i);
      });

      test('should have hamburger menu button', () => {
        expect(htmlContent).toMatch(/id="hamburger"/i);
        expect(htmlContent).toMatch(/class="hamburger"/i);
      });

      test('should have navigation links', () => {
        expect(htmlContent).toMatch(/class="nav-link"/);
        // Check for at least some navigation links
        const linkCount = (htmlContent.match(/class="nav-link"/g) || []).length;
        expect(linkCount).toBeGreaterThanOrEqual(3);
      });

      test('should have profile picture in header', () => {
        expect(htmlContent).toMatch(/class="profile-pic"/i);
      });
    });
  });
});

describe('HTML Structure - Footer Elements', () => {
  pages.forEach(page => {
    describe(`Footer - ${page.title}`, () => {
      let htmlContent;

      beforeEach(() => {
        htmlContent = readHtmlFile(page.name);
      });

      test('should have footer container', () => {
        expect(htmlContent).toMatch(/class="footer-container"/i);
      });

      test('should have footer contact info', () => {
        expect(htmlContent).toMatch(/class="footer-info"/i);
      });

      test('should have footer form section', () => {
        expect(htmlContent).toMatch(/class="footer-form"/i);
      });

      test('should have contact form in footer', () => {
        expect(htmlContent).toMatch(/class="footer-contact-form"/i);
        expect(htmlContent).toMatch(/type="text"[^>]*name="name"/i);
        expect(htmlContent).toMatch(/type="email"[^>]*name="email"/i);
        expect(htmlContent).toMatch(/name="message"/i);
      });

      test('should have footer highlights section', () => {
        expect(htmlContent).toMatch(/class="footer-highlights"/i);
      });

      test('should have footer bottom with copyright', () => {
        expect(htmlContent).toMatch(/class="footer-bottom"/i);
        expect(htmlContent).toMatch(/&copy;/);
        expect(htmlContent).toMatch(/Bednah Kitonyi/);
      });

      test('should have contact email link', () => {
        expect(htmlContent).toMatch(/href="mailto:bednahkitonyi@gmail\.com"/i);
      });

      test('should have contact phone link', () => {
        expect(htmlContent).toMatch(/href="tel:\+254727523766"/i);
      });

      test('should have LinkedIn link', () => {
        expect(htmlContent).toMatch(/linkedin\.com\/in\/bednah-nzimbi/i);
      });

      test('should have GitHub link', () => {
        expect(htmlContent).toMatch(/github\.com\/bednahkitonyi/i);
      });
    });
  });
});

describe('HTML Structure - Accessibility', () => {
  pages.forEach(page => {
    describe(`Accessibility - ${page.title}`, () => {
      let htmlContent;

      beforeEach(() => {
        htmlContent = readHtmlFile(page.name);
      });

      test('should have alt attributes on images', () => {
        const imgMatches = htmlContent.match(/<img[^>]*>/g) || [];
        imgMatches.forEach(img => {
          // At least some images should have alt text
          expect(img).toMatch(/alt=/i);
        });
      });

      test('should have aria-label on buttons', () => {
        expect(htmlContent).toMatch(/aria-label/i);
      });

      test('should have semantic HTML tags', () => {
        expect(htmlContent).toMatch(/<header/i);
        expect(htmlContent).toMatch(/<footer/i);
        expect(htmlContent).toMatch(/<nav/i);
      });

      test('should use proper heading hierarchy', () => {
        expect(htmlContent).toMatch(/<h1/i);
        expect(htmlContent).toMatch(/<h2/i);
      });

      test('should link to shared.js', () => {
        expect(htmlContent).toMatch(/src="js\/shared\.js"/i);
      });
    });
  });
});

describe('HTML Structure - Specific Pages', () => {
  describe('index.html - Home Page', () => {
    let htmlContent;

    beforeEach(() => {
      htmlContent = readHtmlFile('index.html');
    });

    test('should have hero section', () => {
      expect(htmlContent).toMatch(/class="hero"/i);
    });

    test('should have CTA buttons', () => {
      expect(htmlContent).toMatch(/class="cta-buttons"/i);
    });

    test('should have scroll indicator', () => {
      expect(htmlContent).toMatch(/class="scroll-indicator"/i);
    });

    test('should have stats dashboard', () => {
      expect(htmlContent).toMatch(/class="stats-dashboard"/i);
    });

    test('should have expertise section', () => {
      expect(htmlContent).toMatch(/expertise/i);
    });

    test('should have case studies preview', () => {
      expect(htmlContent).toMatch(/case-studies|featured/i);
    });
  });

  describe('case-studies.html - Case Studies Page', () => {
    let htmlContent;

    beforeEach(() => {
      htmlContent = readHtmlFile('case-studies.html');
    });

    test('should have filter buttons', () => {
      expect(htmlContent).toMatch(/class="filter-btn"/i);
      expect(htmlContent).toMatch(/data-filter/i);
    });

    test('should have case cards', () => {
      expect(htmlContent).toMatch(/class="case-card"/i);
    });

    test('should have case categories', () => {
      expect(htmlContent).toMatch(/data-category/i);
    });
  });

  describe('about.html - About Page', () => {
    let htmlContent;

    beforeEach(() => {
      htmlContent = readHtmlFile('about.html');
    });

    test('should have testimonials section', () => {
      expect(htmlContent).toMatch(/testimonial/i);
    });

    test('should have carousel controls', () => {
      expect(htmlContent).toMatch(/carousel-prev|carousel-next/i);
    });

    test('should have skills section', () => {
      expect(htmlContent).toMatch(/skill/i);
    });
  });

  describe('contact.html - Contact Page', () => {
    let htmlContent;

    beforeEach(() => {
      htmlContent = readHtmlFile('contact.html');
    });

    test('should have contact form', () => {
      expect(htmlContent).toMatch(/<form/i);
    });

    test('should have name field', () => {
      expect(htmlContent).toMatch(/type="text"[^>]*name="name"/i);
    });

    test('should have email field', () => {
      expect(htmlContent).toMatch(/type="email"[^>]*name="email"/i);
    });

    test('should have message field', () => {
      expect(htmlContent).toMatch(/name="message"/i);
    });
  });

  describe('resume.html - Resume Page', () => {
    let htmlContent;

    beforeEach(() => {
      htmlContent = readHtmlFile('resume.html');
    });

    test('should have resume viewer', () => {
      expect(htmlContent).toMatch(/class="resume-viewer"/i);
    });

    test('should have download button', () => {
      expect(htmlContent).toMatch(/Download/i);
      expect(htmlContent).toMatch(/\.pdf/i);
    });

    test('should have back to portfolio link', () => {
      expect(htmlContent).toMatch(/Portfolio/i);
    });
  });
});

describe('HTML Validation - Best Practices', () => {
  pages.forEach(page => {
    describe(`Best Practices - ${page.title}`, () => {
      let htmlContent;

      beforeEach(() => {
        htmlContent = readHtmlFile(page.name);
      });

      test('should not have duplicate IDs', () => {
        // IDs should be unique
        const idMatches = htmlContent.match(/id="([^"]+)"/g) || [];
        const ids = idMatches.map(match => match.match(/id="([^"]+)"/)[1]);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
      });

      test('should not have empty href attributes', () => {
        expect(htmlContent).not.toMatch(/href=""\s/);
      });

      test('should have proper closing tags', () => {
        expect(htmlContent).toMatch(/<\/html>/i);
        expect(htmlContent).toMatch(/<\/body>/i);
      });

      test('should use lowercase tag names', () => {
        // Check that HTML uses lowercase
        expect(htmlContent).toMatch(/<html/i);
        expect(htmlContent).not.toMatch(/<HTML/);
      });

      test('should have meta description', () => {
        expect(htmlContent).toMatch(/name="description"/i);
      });

      test('should have author meta tag', () => {
        expect(htmlContent).toMatch(/name="author"/i);
      });
    });
  });
});
