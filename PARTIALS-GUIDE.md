# HTML Build System & Partials Documentation

This project includes an HTML build system to reduce repetition across multiple HTML pages.

## System Overview

The build system uses **HTML partials** - reusable components that are included in different pages:

### Partials Available

- **head.html** - Common `<head>` metadata, stylesheets, and theme initialization
- **header.html** - Navigation header with logo, theme toggle, and hamburger menu
- **footer.html** - Footer with contact info, links, and newsletter signup
- **scripts.html** - Common JavaScript imports (shared.js, contact-form.js, analytics.js)

## Current Usage

Currently, the HTML files maintain the code directly to ensure GitHub Pages compatibility. To refactor fully with the build system:

### Option 1: Implement Static Site Generator (Recommended for Large Projects)

Use **11ty** (Eleventy) or **Hugo** for template management:

```bash
npm install --save-dev @11ty/eleventy
```

### Option 2: Build System (Lightweight)

Use the provided `build-html.js` to compile templates from `templates/` folder:

```bash
node build-html.js
```

**Setup:**
1. Create template files in `templates/` folder
2. In templates, use `<!-- include: header -->` to inject partials
3. Run the build script before deploying

Example template structure:
```html
<!DOCTYPE html>
<html lang="en">
<!-- include: head -->
<body>
  <!-- include: header -->

  <!-- Page-specific content here -->

  <!-- include: footer -->
  <!-- include: scripts -->
</body>
</html>
```

## Manual Maintenance (Current Approach)

The HTML files are currently maintained manually to maximize GitHub Pages compatibility. To update common elements:

1. **Edit the partial file** in `partials/` directory
2. **Manually update each HTML file** with the new content

### Files to Update Simultaneously

When updating common components, remember to update:
- `index.html`
- `about.html`
- `case-studies.html`
- `contact.html`
- `resume.html`
- `404.html` (includes header/footer)

## Future Refactoring

To fully implement the templatingsystem:

1. Create `templates/` directory with page templates
2. Move current HTML content to templates (use `<!-- include: partial-name -->`)
3. Update `package.json` build script: `"build:html": "node build-html.js"`
4. Run build script before deployment to GitHub Pages

## Benefits

- **DRY Principle**: Write navigation, header, footer once
- **Consistency**: All pages stay in sync automatically
- **Maintainability**: Update common elements in one place
- **Scalability**: Easy to add new pages

## Script Commands

```bash
# Once fully refactored:
npm run build:html    # Compile templates with partials
npm run build:css     # Compile Tailwind CSS
npm run build         # Run all builds
```
