const fs = require('fs');
const path = require('path');

// Header template
const headerTemplate = `<header id="main-header" class="bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
        <div class="header-top flex items-center justify-between py-4 px-6 bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700">
            <div class="brand flex items-center gap-4">
                <a href="index.html" class="brand-link flex items-center gap-4 text-gray-900 dark:text-gray-100 no-underline hover:opacity-80 transition-opacity">
                    <img src="profilepic.jpg" alt="Bednah Kitonyi - Software QA Engineer" class="profile-pic w-12 h-12 rounded-full object-cover border-2 border-primary-500">
                    <div class="brand-text">
                        <h1 class="text-xl font-bold m-0">Bednah Kitonyi</h1>
                        <p class="tagline text-sm text-gray-600 dark:text-gray-400 m-0">Software QA Engineer</p>
                    </div>
                </a>
            </div>
            <div class="header-controls flex items-center gap-2">
                <button id="theme-toggle" class="theme-toggle bg-transparent border-none cursor-pointer text-xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark theme" title="Toggle dark theme">
                    <span class="theme-icon">🌙</span>
                </button>
                <button id="hamburger" class="hamburger bg-transparent border-none cursor-pointer text-xl p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle navigation menu" title="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <nav role="navigation" class="nav-menu hidden md:flex flex-wrap gap-8 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-surface">
            <ul class="flex flex-col md:flex-row gap-6 md:gap-8 list-none p-0 m-0 w-full">
                <li><a href="index.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative">Home</a></li>
                <li><a href="case-studies.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative">Case Studies</a></li>
                <li><a href="about.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative">About</a></li>
                <li><a href="contact.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative">Contact</a></li>
                <li><a href="resume.html" class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative">Resume</a></li>
            </ul>
        </nav>
    </header>`;

// Footer template
const footerTemplate = `<footer class="bg-gray-900 dark:bg-gray-950 text-gray-100 py-16 px-6 mt-20">
        <div class="footer-container max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-8">
            <div class="footer-column footer-info">
                <h2 class="text-xl font-bold mb-4">Bednah Kitonyi</h2>
                <p class="footer-bio text-gray-300 mb-6">Serious about QA. 3+ years of expertise in test automation, risk-based testing, and quality assurance.</p>
                <div class="footer-contact">
                    <div class="contact-item mb-4">
                        <span class="contact-label text-gray-400 text-sm font-semibold">ADDRESS</span>
                        <p class="text-gray-200 mb-0">Nairobi, Kenya 🇰🇪</p>
                    </div>
                    <div class="contact-item mb-4">
                        <span class="contact-label text-gray-400 text-sm font-semibold">PHONE</span>
                        <p class="text-gray-200 mb-0"><a href="tel:+254727523766" class="text-primary-300 hover:text-primary-400 no-underline transition-colors">+254 727 523 766</a></p>
                    </div>
                    <div class="contact-item mb-4">
                        <span class="contact-label text-gray-400 text-sm font-semibold">E-MAIL</span>
                        <p class="text-gray-200 mb-0"><a href="mailto:bednahkitonyi@gmail.com" class="text-primary-300 hover:text-primary-400 no-underline transition-colors">bednahkitonyi@gmail.com</a></p>
                    </div>
                </div>
                <div class="social-links flex gap-4 mt-6">
                    <a href="https://www.linkedin.com/in/bednah-nzimbi/" target="_blank" rel="noopener noreferrer" class="social-icon w-10 h-10 rounded-full bg-gray-700 hover:bg-primary-600 flex items-center justify-center text-white no-underline transition-colors" title="LinkedIn">in</a>
                    <a href="https://github.com/bednahkitonyi" target="_blank" rel="noopener noreferrer" class="social-icon w-10 h-10 rounded-full bg-gray-700 hover:bg-primary-600 flex items-center justify-center text-white no-underline transition-colors" title="GitHub">⚙️</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-icon w-10 h-10 rounded-full bg-gray-700 hover:bg-primary-600 flex items-center justify-center text-white no-underline transition-colors" title="Twitter">𝕏</a>
                    <a href="mailto:bednahkitonyi@gmail.com" class="social-icon w-10 h-10 rounded-full bg-gray-700 hover:bg-primary-600 flex items-center justify-center text-white no-underline transition-colors" title="Email">✉️</a>
                </div>
            </div>

            <div class="footer-column footer-form">
                <h3 class="text-xl font-bold mb-4">Questions? Contact Us</h3>
                <form class="footer-contact-form space-y-4" action="#" method="POST">
                    <input type="text" name="name" placeholder="Name" required aria-label="Full Name" class="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors">
                    <input type="email" name="email" placeholder="E-mail" required aria-label="Email Address" class="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors">
                    <textarea name="message" placeholder="Message" rows="4" required aria-label="Your Message" class="w-full px-4 py-2 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"></textarea>
                    <button type="submit" class="btn-submit w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors cursor-pointer">SEND MESSAGE</button>
                </form>
            </div>

            <div class="footer-column footer-highlights">
                <h3 class="text-xl font-bold mb-4">Highlights</h3>
                <nav class="highlights-nav">
                    <ul class="list-none p-0 m-0 space-y-2">
                        <li><a href="about.html" class="text-gray-300 hover:text-primary-400 no-underline transition-colors">Who we are</a></li>
                        <li><a href="case-studies.html" class="text-gray-300 hover:text-primary-400 no-underline transition-colors">What we do</a></li>
                        <li><a href="case-studies.html" class="text-gray-300 hover:text-primary-400 no-underline transition-colors">What we've done</a></li>
                        <li><a href="contact.html" class="text-gray-300 hover:text-primary-400 no-underline transition-colors">Get in touch</a></li>
                        <li><a href="resume.html" class="text-gray-300 hover:text-primary-400 no-underline transition-colors">Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer-bottom border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Bednah Kitonyi | Software QA Engineer</p>
        </div>
    </footer>`;

function updateFile(filePath, navLink) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Add scroll classes to html and body
        content = content.replace(/<html lang="en">/, '<html lang="en" class="scroll-smooth">');
        content = content.replace(/<body>/, '<body class="transition-colors duration-300">');

        // Replace header
        content = content.replace(/<header id="main-header">([\s\S]*?)<\/header>/, headerTemplate.replace('class="nav-link"', `class="nav-link${navLink ? ' active text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative font-semibold text-primary-600 dark:text-primary-400' : ' text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors no-underline relative'}"`));

        // Replace footer
        content = content.replace(/<footer>([\s\S]*?)<\/footer>/, footerTemplate);

        // Replace scroll-to-top button
        content = content.replace(/<button id="scroll-to-top"[^>]*>[\s\S]*?<\/button>/, '<button id="scroll-to-top" class="scroll-to-top fixed bottom-6 right-6 w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center cursor-pointer transition-all opacity-0 translate-y-2 pointer-events-none" aria-label="Scroll to top" title="Scroll to top">\n        <span>↑</span>\n    </button>');

        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    } catch (err) {
        console.error(`Error updating ${filePath}:`, err.message);
        return false;
    }
}

// Update all relevant files
const files = [
    { path: 'about.html', nav: 'About' },
    { path: 'case-studies.html', nav: 'Case Studies' },
    { path: 'contact.html', nav: 'Contact' },
    { path: 'resume.html', nav: 'Resume' },
    { path: '404.html', nav: null }
];

files.forEach(file => {
    if (fs.existsSync(file.path)) {
        if (updateFile(file.path, file.nav)) {
            console.log(`✓ ${file.path} updated successfully`);
        } else {
            console.log(`✗ Failed to update ${file.path}`);
        }
    }
});
