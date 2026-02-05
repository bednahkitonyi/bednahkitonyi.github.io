# � Bednah Kitonyi - QA Engineer Portfolio

A modern, fully-featured Software QA Engineer portfolio showcasing expertise in risk-based testing, test automation, API testing, and quality assurance. Built with HTML5, CSS3, and vanilla JavaScript with a focus on user experience, accessibility, and performance.

## ✨ Features

### **Content & Sections**
- 🏠 **Hero Section** - Professional headline with CTA buttons
- 📊 **Stats Dashboard** - Animated counters showing key metrics (5+ years experience, 200+ bugs detected, 500+ test cases, 12+ tools)
- 📚 **Case Studies** - Detailed real-world testing scenarios with difficulty levels and read time estimates
- 👤 **About Section** - Professional summary, experience, education, and continuous learning
- 🗣️ **Testimonials Carousel** - Client and colleague quotes with smooth carousel navigation
- 🤖 **Test Automation Section** - GitHub repository showcase
- 📋 **Skills & Tools** - Comprehensive technical expertise and tools mastered

### **Interactive Features**
- 🎨 **Dark/Light Theme Toggle** - System preference detection with localStorage persistence
- 📱 **Responsive Hamburger Menu** - Mobile-friendly navigation that adapts to all screen sizes
- ⬆️⬇️ **Scroll Navigation** - One-click scroll to top/bottom buttons
- 🎬 **Smooth Scroll Animations** - Elements fade in as they enter the viewport using Intersection Observer API
- 🔍 **Case Study Filters** - Filter by category (Manual, Automation, API Testing)
- 📤 **Social Share Buttons** - Share case studies with native share or clipboard copy
- 🎠 **Testimonials Carousel** - Navigate through client testimonials with prev/next controls
- 📅 **Interactive Timeline** - Visual career progression timeline
- ✅ **Form Validation** - Real-time input validation with visual feedback

### **User Experience**
- ⌨️ **Keyboard Navigation** - Full keyboard support with ESC to close menu
- ♿ **Accessibility** - ARIA labels, semantic HTML, proper contrast ratios
- 📖 **Reading Time** - Estimated read time for each case study
- 🏷️ **Difficulty Badges** - Complexity levels for case studies (Beginner, Intermediate, Advanced)
- 🎯 **Smooth Transitions** - CSS animations and transitions throughout

### **Technical & SEO**
- 📊 **Google Analytics Integration** - Track visitor behavior and interactions
- 🗺️ **XML Sitemap** - `sitemap.xml` for better search engine crawling
- 🚫 **Custom 404 Page** - Branded error page with navigation links
- 🖨️ **Print-Friendly Styling** - Optimized CSS for printing to PDF
- 📱 **Mobile-First Design** - Responsive breakpoints at 768px and 480px
- 🎨 **CSS Variables** - Theme system with light/dark mode support
- 📥 **Resume Download** - One-click PDF download button

## 🛠️ Technologies Used

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, animations, CSS variables
- **JavaScript (Vanilla)** - No dependencies, pure JS
  - Intersection Observer API for scroll animations
  - LocalStorage for theme persistence
  - Native Share API with clipboard fallback

### **Deployment**
- **GitHub Pages** - Free hosting with custom domain support
- **Git** - Version control

## 📦 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/bednahkitonyi/bednahkitonyi.github.io.git
cd bednahkitonyi.github.io
```

### Open Locally
Simply open `index.html` in your web browser, or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (using http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

## 📊 Site Structure

```
├── index.html           # Main portfolio page
├── styles.css           # All styling with dark theme support
├── 404.html             # Custom error page
├── sitemap.xml          # SEO sitemap
├── README.md            # This file
└── profilepic.jpg       # Profile picture
```

## 🎨 Features in Detail

### Dark/Light Theme
- Automatic detection of system preference (`prefers-color-scheme`)
- Manual toggle with theme persistence across sessions
- Smooth transitions between themes
- All colors use CSS variables for consistency

### Case Study Filters
- Filter by testing type: Manual, Automation, API
- Dynamic show/hide with smooth animations
- Real-time filtering without page reload

### Testimonials Carousel
- Manually navigate between testimonials
- Active state highlighting
- Smooth fade transitions
- Mobile-optimized controls

### Scroll Animations
- Elements fade and slide in as you scroll into view
- Uses Intersection Observer API for performance
- Applied to all sections and cards

### Form Validation
- Real-time validation on blur and input
- Visual error/success states
- Red border for empty fields, green for valid entries
- Smooth transitions

### Stats Dashboard
- Animated number counters
- Triggers on scroll into view
- Hover effects with lift animation
- Grid layout that adapts to screen size

## 📱 Responsive Design

- **Desktop (1000px+)** - Full layout with sidebar-ready structure
- **Tablet (768px-999px)** - Optimized single-column layout
- **Mobile (480px-767px)** - Touch-friendly interface
- **Ultra-Mobile (<480px)** - Minimal spacing, full-width elements

## 🔧 Customization

### Update Personal Information
Edit these sections in `index.html`:
- Hero headline
- Contact details in footer
- Profile picture reference
- Case study details
- Testimonials
- Skills and tools

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #1a237e;
    --accent-secondary: #283593;
    /* ... more colors ... */
}

[data-theme="dark"] {
    /* Dark theme colors */
}
```

### Add Google Analytics
Replace the GA ID in `index.html` head:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
```

## 📈 Performance Features
- Minimal external dependencies
- CSS animations for smooth performance
- Lazy-loaded animations with Intersection Observer
- Optimized for Core Web Vitals

## 🔐 Security
- No external scripts (except Google Analytics)
- Content Security Policy ready
- HTTPS enabled on GitHub Pages
- No user data collection (GA only)

## 📝 License
This portfolio is open for inspiration and learning. Feel free to fork and customize for your own use!

## 📬 Contact

- **Email:** bednahkitonyi@gmail.com
- **Phone:** +254 727 523 766
- **LinkedIn:** https://www.linkedin.com/in/bednah-nzimbi/
- **GitHub:** https://github.com/bednahkitonyi

## 🌐 Live Demo
**Check out the portfolio:** https://bednahkitonyi.github.io/

---

**Last Updated:** February 5, 2026
**Version:** 2.0 - Feature-Rich Professional Portfolio
