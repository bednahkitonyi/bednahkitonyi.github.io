/**
 * Shared JavaScript Module
 * Core functionality for theme toggling, navigation, animations, and interactions
 */

/**
 * Initialize theme toggle functionality
 */
function initThemeToggle() {
    try {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.querySelector('.theme-icon');

        if (!themeToggle || !themeIcon) {
            console.warn('Theme toggle elements not found');
            return;
        }

        /**
         * Update theme icon based on current theme
         */
        function updateThemeIcon() {
            try {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
            } catch (error) {
                console.error('Error updating theme icon:', error);
            }
        }

        themeToggle.addEventListener('click', () => {
            try {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon();
            } catch (error) {
                console.error('Error toggling theme:', error);
            }
        });

        updateThemeIcon();
    } catch (error) {
        console.error('Failed to initialize theme toggle:', error);
    }
}

/**
 * Initialize sticky header on scroll
 */
function initStickyHeader() {
    try {
        const header = document.getElementById('main-header');
        if (!header) {
            console.warn('Main header not found');
            return;
        }

        window.addEventListener('scroll', () => {
            try {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            } catch (error) {
                console.error('Error updating header scroll state:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize sticky header:', error);
    }
}

/**
 * Set active nav link based on current page
 */
function initActiveNavLink() {
    try {
        const currentLocation = location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        if (navLinks.length === 0) {
            console.warn('Navigation links not found');
            return;
        }

        navLinks.forEach(link => {
            try {
                if (link.href.includes(currentLocation) ||
                    (currentLocation === '/' && link.href.includes('index.html'))) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            } catch (error) {
                console.error('Error processing nav link:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize active nav link:', error);
    }
}

/**
 * Initialize hamburger menu toggle
 */
function initHamburgerMenu() {
    try {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (!hamburger || !navMenu) {
            console.warn('Hamburger menu elements not found');
            return;
        }

        hamburger.addEventListener('click', () => {
            try {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            } catch (error) {
                console.error('Error toggling hamburger menu:', error);
            }
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                try {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                } catch (error) {
                    console.error('Error closing menu on link click:', error);
                }
            });
        });
    } catch (error) {
        console.error('Failed to initialize hamburger menu:', error);
    }
}

/**
 * Initialize CTA button animation
 */
function initCTAButtons() {
    try {
        const ctaButtons = document.querySelectorAll('.cta-buttons a');

        if (ctaButtons.length === 0) {
            console.warn('CTA buttons not found');
            return;
        }

        ctaButtons.forEach((btn, index) => {
            try {
                btn.style.setProperty('--button-index', index);
            } catch (error) {
                console.error('Error setting CTA button animation:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize CTA buttons:', error);
    }
}

/**
 * Initialize scroll indicator click handler
 */
function initScrollIndicator() {
    try {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) {
            console.warn('Scroll indicator not found');
            return;
        }

        scrollIndicator.addEventListener('click', () => {
            try {
                const nextSection = document.querySelector('.stats-dashboard');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                console.error('Error scrolling to next section:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize scroll indicator:', error);
    }
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    try {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                try {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                } catch (error) {
                    console.error('Error in intersection observer:', error);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section, .case-card, .expertise-card').forEach(el => {
            try {
                observer.observe(el);
            } catch (error) {
                console.error('Error observing element:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize scroll animations:', error);
    }
}

/**
 * Animate counter from 0 to target value
 * @param {HTMLElement} element - The element with data-target attribute
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, duration = 2000) {
    try {
        if (!element || !element.dataset.target) {
            console.warn('Invalid counter element');
            return;
        }

        const target = parseInt(element.dataset.target);
        const start = Date.now();

        const animate = () => {
            try {
                const progress = (Date.now() - start) / duration;
                const current = Math.floor(target * progress);
                element.textContent = current > target ? target : current;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            } catch (error) {
                console.error('Error in counter animation:', error);
            }
        };

        animate();
    } catch (error) {
        console.error('Failed to animate counter:', error);
    }
}

/**
 * Initialize animated stats counter
 */
function initStatsCounter() {
    try {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                try {
                    if (entry.isIntersecting) {
                        const statNumber = entry.target.querySelector('.stat-number');
                        if (statNumber && !statNumber.classList.contains('animated')) {
                            animateCounter(statNumber);
                            statNumber.classList.add('animated');
                        }
                        statsObserver.unobserve(entry.target);
                    }
                } catch (error) {
                    console.error('Error in stats observer:', error);
                }
            });
        }, { threshold: 0.5 });

        const statsDashboard = document.querySelector('.stats-dashboard');
        if (statsDashboard) {
            document.querySelectorAll('.stat-card').forEach(card => {
                try {
                    statsObserver.observe(card);
                } catch (error) {
                    console.error('Error observing stat card:', error);
                }
            });
        }
    } catch (error) {
        console.error('Failed to initialize stats counter:', error);
    }
}

/**
 * Initialize case study filter functionality
 */
function initCaseStudyFilters() {
    try {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const caseCards = document.querySelectorAll('.case-card');

        if (filterBtns.length === 0 || caseCards.length === 0) {
            console.warn('Filter buttons or case cards not found');
            return;
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filter = btn.dataset.filter;
                    caseCards.forEach(card => {
                        try {
                            if (filter === 'all' || card.dataset.category === filter) {
                                card.style.display = 'block';
                                card.style.animation = 'fadeIn 0.3s ease-out';
                            } else {
                                card.style.display = 'none';
                            }
                        } catch (error) {
                            console.error('Error filtering case card:', error);
                        }
                    });
                } catch (error) {
                    console.error('Error handling filter click:', error);
                }
            });
        });
    } catch (error) {
        console.error('Failed to initialize case study filters:', error);
    }
}

/**
 * Initialize social share functionality
 */
function initSocialShare() {
    try {
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                try {
                    const url = window.location.href + (btn.dataset.url || '');
                    const title = btn.dataset.title || document.title;

                    if (navigator.share) {
                        navigator.share({
                            title: title,
                            url: url
                        }).catch(error => {
                            console.warn('Native share failed:', error);
                        });
                    } else {
                        // Fallback: copy to clipboard
                        if (navigator.clipboard) {
                            navigator.clipboard.writeText(url).then(() => {
                                btn.textContent = '✓ Link Copied';
                                setTimeout(() => {
                                    btn.textContent = 'Share';
                                }, 2000);
                            }).catch(error => {
                                console.error('Clipboard copy failed:', error);
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error handling share button:', error);
                }
            });
        });
    } catch (error) {
        console.error('Failed to initialize social share:', error);
    }
}

/**
 * Initialize testimonials carousel
 */
function initTestimonialsCarousel() {
    try {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');

        if (testimonialItems.length === 0) {
            console.warn('Testimonial items not found');
            return;
        }

        let currentTestimonial = 0;

        /**
         * Show specific testimonial
         * @param {number} index - Index of testimonial to show
         */
        function showTestimonial(index) {
            try {
                testimonialItems.forEach(item => item.classList.remove('active'));
                if (testimonialItems[index]) {
                    testimonialItems[index].classList.add('active');
                }
            } catch (error) {
                console.error('Error showing testimonial:', error);
            }
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                try {
                    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
                    showTestimonial(currentTestimonial);
                } catch (error) {
                    console.error('Error navigating to previous testimonial:', error);
                }
            });

            nextBtn.addEventListener('click', () => {
                try {
                    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
                    showTestimonial(currentTestimonial);
                } catch (error) {
                    console.error('Error navigating to next testimonial:', error);
                }
            });

            showTestimonial(0);
        }
    } catch (error) {
        console.error('Failed to initialize testimonials carousel:', error);
    }
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    try {
        const form = document.querySelector('form');
        if (!form) {
            console.warn('Form not found');
            return;
        }

        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            try {
                input.addEventListener('blur', () => {
                    try {
                        if (input.value.trim() === '') {
                            input.classList.add('error');
                        } else {
                            input.classList.remove('error');
                        }
                    } catch (error) {
                        console.error('Error validating input on blur:', error);
                    }
                });

                input.addEventListener('input', () => {
                    try {
                        if (input.value.trim() !== '') {
                            input.classList.remove('error');
                            input.classList.add('valid');
                        }
                    } catch (error) {
                        console.error('Error validating input on input:', error);
                    }
                });
            } catch (error) {
                console.error('Error setting up input listeners:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize form validation:', error);
    }
}

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    try {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        if (!scrollToTopBtn) {
            console.warn('Scroll to top button not found');
            return;
        }

        window.addEventListener('scroll', () => {
            try {
                if (window.scrollY > 300) {
                    scrollToTopBtn.classList.add('visible');
                } else {
                    scrollToTopBtn.classList.remove('visible');
                }
            } catch (error) {
                console.error('Error updating scroll to top visibility:', error);
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            try {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } catch (error) {
                console.error('Error scrolling to top:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize scroll to top:', error);
    }
}

/**
 * Initialize keyboard navigation
 */
function initKeyboardNavigation() {
    try {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.getElementById('hamburger');

        document.addEventListener('keydown', (e) => {
            try {
                if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (hamburger) {
                        hamburger.classList.remove('active');
                    }
                }
            } catch (error) {
                console.error('Error handling keyboard navigation:', error);
            }
        });
    } catch (error) {
        console.error('Failed to initialize keyboard navigation:', error);
    }
}

/**
 * Initialize all modules
 */
function initializeAll() {
    try {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initAllModules();
            });
        } else {
            initAllModules();
        }
    } catch (error) {
        console.error('Failed to initialize all modules:', error);
    }
}

/**
 * Run all initialization functions
 */
function initAllModules() {
    const modules = [
        { name: 'Theme Toggle', fn: initThemeToggle },
        { name: 'Sticky Header', fn: initStickyHeader },
        { name: 'Active Nav Link', fn: initActiveNavLink },
        { name: 'Hamburger Menu', fn: initHamburgerMenu },
        { name: 'CTA Buttons', fn: initCTAButtons },
        { name: 'Scroll Indicator', fn: initScrollIndicator },
        { name: 'Scroll Animations', fn: initScrollAnimations },
        { name: 'Stats Counter', fn: initStatsCounter },
        { name: 'Case Study Filters', fn: initCaseStudyFilters },
        { name: 'Social Share', fn: initSocialShare },
        { name: 'Testimonials Carousel', fn: initTestimonialsCarousel },
        { name: 'Form Validation', fn: initFormValidation },
        { name: 'Scroll to Top', fn: initScrollToTop },
        { name: 'Keyboard Navigation', fn: initKeyboardNavigation }
    ];

    modules.forEach(module => {
        try {
            module.fn();
        } catch (error) {
            console.error(`Failed to initialize ${module.name}:`, error);
        }
    });
}

// Initialize everything
initializeAll();

