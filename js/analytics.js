/**
 * Google Analytics Configuration Handler
 *
 * Instructions for setup:
 * 1. Create a Google Analytics 4 property at: https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Replace the placeholder GA_MEASUREMENT_ID below with your actual ID
 * 4. This script will automatically track page views and custom events
 */

// Configuration - UPDATE WITH YOUR ACTUAL MEASUREMENT ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

/**
 * Initialize Google Analytics with event tracking
 */
function initializeAnalytics() {
    try {
        // Only initialize if GA measurement ID is properly configured
        if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.warn('Google Analytics: Measurement ID not configured. Please set GA_MEASUREMENT_ID.');
            return;
        }

        // Load gtag script
        loadGtagScript();

        // Track page view
        window.gtag('config', GA_MEASUREMENT_ID, {
            'page_path': window.location.pathname,
            'page_title': document.title
        });

        // Setup custom event tracking
        setupEventTracking();
    } catch (error) {
        console.error('Failed to initialize Google Analytics:', error);
    }
}

/**
 * Load gtag script dynamically
 */
function loadGtagScript() {
    try {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];

        // Define gtag function
        function gtag() {
            window.dataLayer.push(arguments);
        }

        window.gtag = gtag;
        gtag('js', new Date());

        // Load gtag script if not already loaded
        if (!document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            document.head.appendChild(gtagScript);
        }
    } catch (error) {
        console.error('Failed to load gtag script:', error);
    }
}

/**
 * Setup event tracking for key user interactions
 */
function setupEventTracking() {
    try {
        // Track case study clicks
        document.querySelectorAll('.case-card, .case-card a').forEach(element => {
            element.addEventListener('click', () => {
                gtag('event', 'case_study_view', {
                    'event_category': 'engagement',
                    'event_label': element.textContent.substring(0, 50)
                });
            });
        });

        // Track resume download
        document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
            link.addEventListener('click', () => {
                gtag('event', 'file_download', {
                    'event_category': 'engagement',
                    'file_name': link.href.substring(link.href.lastIndexOf('/') + 1),
                    'event_label': 'Resume'
                });
            });
        });

        // Track external link clicks (LinkedIn, GitHub, etc.)
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', () => {
                const url = new URL(link.href);
                gtag('event', 'outbound_link', {
                    'event_category': 'engagement',
                    'event_label': url.hostname,
                    'destination_url': link.href
                });
            });
        });

        // Track form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
                gtag('event', 'form_submit', {
                    'event_category': 'engagement',
                    'form_name': form.classList.contains('contact-form') ? 'Contact Form' : 'Footer Form'
                });
            });
        });

        // Track contact method clicks (email, phone)
        document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', () => {
                const type = link.href.startsWith('mailto') ? 'email' : 'phone';
                gtag('event', 'contact_click', {
                    'event_category': 'engagement',
                    'contact_type': type
                });
            });
        });

        // Track navigation to different pages
        document.querySelectorAll('a[href*=".html"]').forEach(link => {
            link.addEventListener('click', () => {
                const page = link.href.substring(link.href.lastIndexOf('/') + 1);
                gtag('event', 'page_navigate', {
                    'event_category': 'navigation',
                    'destination_page': page
                });
            });
        });

        // Track theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                gtag('event', 'theme_toggle', {
                    'event_category': 'user_preference',
                    'theme': currentTheme === 'dark' ? 'light' : 'dark'
                });
            });
        }
    } catch (error) {
        console.error('Failed to setup event tracking:', error);
    }
}

// Initialize analytics when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnalytics);
} else {
    initializeAnalytics();
}
