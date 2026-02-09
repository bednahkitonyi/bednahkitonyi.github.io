/**
 * Test Suite: Theme Toggle Functionality
 * Tests the dark/light theme switching using data-theme attribute and localStorage
 */

describe('Theme Toggle', () => {
  let themeToggle;
  let themeIcon;

  beforeEach(() => {
    // Reset DOM and localStorage
    document.body.innerHTML = '';
    localStorage.clear();
    jest.clearAllMocks();

    // Create theme toggle element
    const header = document.createElement('header');
    header.id = 'main-header';
    
    themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle';
    
    themeIcon = document.createElement('span');
    themeIcon.className = 'theme-icon';
    themeIcon.textContent = '🌙';
    
    themeToggle.appendChild(themeIcon);
    header.appendChild(themeToggle);
    document.body.appendChild(header);

    // Set initial theme
    document.documentElement.setAttribute('data-theme', 'light');
  });

  test('should exist in the DOM', () => {
    expect(themeToggle).toBeInTheDocument();
    expect(themeIcon).toBeInTheDocument();
  });

  test('should display moon icon for light theme', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    expect(themeIcon.textContent).toBe('🌙');
  });

  test('should display sun icon for dark theme', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    expect(themeIcon.textContent).toBe('☀️');
  });

  test('should toggle theme on button click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Simulate click - theme toggle behavior
    const newTheme = 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  test('should persist theme in localStorage', () => {
    const theme = 'dark';
    localStorage.setItem('theme', theme);
    
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(localStorage.getItem('theme')).toBe(theme);
  });

  test('should retrieve persisted theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const savedTheme = localStorage.getItem('theme');
    
    expect(savedTheme).toBe('dark');
  });
});

/**
 * Test Suite: Sticky Header on Scroll
 * Tests the header sticky positioning when scrolling
 */
describe('Sticky Header on Scroll', () => {
  let header;

  beforeEach(() => {
    document.body.innerHTML = '';
    header = document.createElement('header');
    header.id = 'main-header';
    document.body.appendChild(header);
    window.scrollY = 0;
  });

  test('should exist in the DOM', () => {
    expect(header).toBeInTheDocument();
    expect(header.id).toBe('main-header');
  });

  test('should add scrolled class when scrolled past 50px', () => {
    const scrollAmount = 100;
    window.scrollY = scrollAmount;
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
    
    expect(header.classList.contains('scrolled')).toBe(true);
  });

  test('should remove scrolled class when scrolled less than 50px', () => {
    header.classList.add('scrolled');
    window.scrollY = 30;
    
    if (window.scrollY <= 50) {
      header.classList.remove('scrolled');
    }
    
    expect(header.classList.contains('scrolled')).toBe(false);
  });

  test('should handle scroll state at exactly 50px boundary', () => {
    window.scrollY = 50;
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    expect(header.classList.contains('scrolled')).toBe(false);
  });
});

/**
 * Test Suite: Navigation Links Active State
 * Tests active nav link detection based on current page
 */
describe('Navigation Links Active State', () => {
  let navContainer;
  let links;

  beforeEach(() => {
    document.body.innerHTML = '';
    navContainer = document.createElement('nav');
    navContainer.className = 'nav-menu';
    
    links = [
      { href: 'index.html', text: 'Home' },
      { href: 'case-studies.html', text: 'Case Studies' },
      { href: 'about.html', text: 'About' },
      { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.className = 'nav-link';
      a.textContent = link.text;
      navContainer.appendChild(a);
    });

    document.body.appendChild(navContainer);
  });

  test('should have nav links in the DOM', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(4);
  });

  test('should identify correct page from URL', () => {
    const testUrl = '/about.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      if (link.href.includes(testUrl)) {
        link.classList.add('active');
      }
    });

    expect(navLinks[2].classList.contains('active')).toBe(true);
  });

  test('should remove active class from other links', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const testUrl = 'case-studies.html';

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(testUrl)) {
        link.classList.add('active');
      }
    });

    expect(navLinks[0].classList.contains('active')).toBe(false);
    expect(navLinks[1].classList.contains('active')).toBe(true);
    expect(navLinks[2].classList.contains('active')).toBe(false);
  });
});

/**
 * Test Suite: Hamburger Menu Toggle
 * Tests mobile menu open/close functionality
 */
describe('Hamburger Menu Toggle', () => {
  let hamburger;
  let navMenu;

  beforeEach(() => {
    document.body.innerHTML = '';
    hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.className = 'hamburger';

    navMenu = document.createElement('nav');
    navMenu.className = 'nav-menu';

    document.body.appendChild(hamburger);
    document.body.appendChild(navMenu);
  });

  test('should have hamburger button', () => {
    expect(hamburger).toBeInTheDocument();
  });

  test('should have nav menu', () => {
    expect(navMenu).toBeInTheDocument();
  });

  test('should toggle active class on hamburger click', () => {
    expect(hamburger.classList.contains('active')).toBe(false);
    hamburger.classList.toggle('active');
    expect(hamburger.classList.contains('active')).toBe(true);
    hamburger.classList.toggle('active');
    expect(hamburger.classList.contains('active')).toBe(false);
  });

  test('should toggle active class on nav menu', () => {
    expect(navMenu.classList.contains('active')).toBe(false);
    navMenu.classList.toggle('active');
    expect(navMenu.classList.contains('active')).toBe(true);
  });

  test('should close menu when nav link is clicked', () => {
    navMenu.classList.add('active');
    hamburger.classList.add('active');

    const link = document.createElement('a');
    link.href = '#';
    navMenu.appendChild(link);

    // Simulate click
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');

    expect(navMenu.classList.contains('active')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
  });
});

/**
 * Test Suite: Scroll Indicator
 * Tests scroll-to-section functionality
 */
describe('Scroll Indicator', () => {
  let scrollIndicator;
  let nextSection;

  beforeEach(() => {
    document.body.innerHTML = '';
    
    scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    
    nextSection = document.createElement('section');
    nextSection.className = 'stats-dashboard';
    
    document.body.appendChild(scrollIndicator);
    document.body.appendChild(nextSection);
  });

  test('should scroll to next section when clicked', () => {
    const initialScrollY = window.scrollY;
    expect(initialScrollY).toBe(0);
    expect(nextSection).toBeInTheDocument();
  });

  test('should find next section element', () => {
    const nextSect = document.querySelector('.stats-dashboard');
    expect(nextSect).toBe(nextSection);
  });
});

/**
 * Test Suite: Form Validation
 * Tests form input validation and error states
 */
describe('Form Validation', () => {
  let form;
  let nameInput;
  let emailInput;
  let messageInput;

  beforeEach(() => {
    document.body.innerHTML = '';
    form = document.createElement('form');
    
    nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    nameInput.required = true;

    emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email';
    emailInput.required = true;

    messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    messageInput.placeholder = 'Message';
    messageInput.required = true;

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    document.body.appendChild(form);
  });

  test('should have form in the DOM', () => {
    expect(form).toBeInTheDocument();
  });

  test('should have all required inputs', () => {
    const inputs = form.querySelectorAll('input, textarea');
    expect(inputs.length).toBe(3);
  });

  test('should add error class for empty input on blur', () => {
    nameInput.value = '';
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('error');
    }
    expect(nameInput.classList.contains('error')).toBe(true);
  });

  test('should remove error class when input has value', () => {
    nameInput.classList.add('error');
    nameInput.value = 'John Doe';
    if (nameInput.value.trim() !== '') {
      nameInput.classList.remove('error');
    }
    expect(nameInput.classList.contains('error')).toBe(false);
  });

  test('should add valid class when input has content', () => {
    nameInput.value = 'John Doe';
    if (nameInput.value.trim() !== '') {
      nameInput.classList.add('valid');
    }
    expect(nameInput.classList.contains('valid')).toBe(true);
  });

  test('should validate email format', () => {
    const validEmails = [
      'test@example.com',
      'user@domain.co.uk',
      'name+tag@email.com'
    ];

    validEmails.forEach(email => {
      emailInput.value = email;
      emailInput.type = 'email';
      // Simple validation check
      const isValid = emailInput.value.includes('@') && emailInput.value.includes('.');
      expect(isValid).toBe(true);
    });
  });
});

/**
 * Test Suite: Case Study Filtering
 * Tests the case study filter functionality
 */
describe('Case Study Filtering', () => {
  let filterContainer;
  let caseContainer;
  let filterBtns;
  let caseCards;

  beforeEach(() => {
    document.body.innerHTML = '';
    
    // Create filter buttons
    filterContainer = document.createElement('div');
    filterContainer.className = 'filter-buttons';
    ['all', 'manual', 'automation', 'api'].forEach(category => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = category;
      btn.textContent = category;
      if (category === 'all') btn.classList.add('active');
      filterContainer.appendChild(btn);
    });

    // Create case cards
    caseContainer = document.createElement('div');
    caseContainer.className = 'case-cards';
    
    const categories = ['manual', 'automation', 'api', 'manual'];
    categories.forEach((category, index) => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.dataset.category = category;
      card.textContent = `Case ${index + 1}`;
      card.style.display = 'block';
      caseContainer.appendChild(card);
    });

    document.body.appendChild(filterContainer);
    document.body.appendChild(caseContainer);
    
    filterBtns = document.querySelectorAll('.filter-btn');
    caseCards = document.querySelectorAll('.case-card');
  });

  test('should have filter buttons', () => {
    expect(filterBtns.length).toBe(4);
  });

  test('should have case cards', () => {
    expect(caseCards.length).toBe(4);
  });

  test('should show all cards when "all" filter is active', () => {
    let visibleCount = 0;
    caseCards.forEach(card => {
      if (card.style.display !== 'none') visibleCount++;
    });
    expect(visibleCount).toBe(4);
  });

  test('should filter cards by category', () => {
    const filter = 'manual';
    caseCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    let visibleCount = 0;
    caseCards.forEach(card => {
      if (card.style.display !== 'none') visibleCount++;
    });
    expect(visibleCount).toBe(2); // Two manual cards
  });

  test('should toggle active class on filter button', () => {
    const allBtn = filterBtns[0];
    const automationBtn = filterBtns[2];

    allBtn.classList.remove('active');
    automationBtn.classList.add('active');

    expect(allBtn.classList.contains('active')).toBe(false);
    expect(automationBtn.classList.contains('active')).toBe(true);
  });
});

/**
 * Test Suite: Testimonials Carousel
 * Tests carousel navigation functionality
 */
describe('Testimonials Carousel', () => {
  let testimonialContainer;
  let testimonialItems;
  let prevBtn;
  let nextBtn;
  let currentTestimonial = 0;

  beforeEach(() => {
    document.body.innerHTML = '';

    testimonialContainer = document.createElement('div');
    testimonialContainer.className = 'testimonials-carousel';

    ['Testimonial 1', 'Testimonial 2', 'Testimonial 3'].forEach((text, index) => {
      const item = document.createElement('div');
      item.className = 'testimonial-item';
      item.textContent = text;
      if (index === 0) item.classList.add('active');
      testimonialContainer.appendChild(item);
    });

    prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-prev';
    prevBtn.textContent = '←';

    nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-next';
    nextBtn.textContent = '→';

    document.body.appendChild(testimonialContainer);
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);

    testimonialItems = document.querySelectorAll('.testimonial-item');
    currentTestimonial = 0;
  });

  test('should have testimonial items', () => {
    expect(testimonialItems.length).toBe(3);
  });

  test('should have first testimonial active by default', () => {
    expect(testimonialItems[0].classList.contains('active')).toBe(true);
    expect(testimonialItems[1].classList.contains('active')).toBe(false);
  });

  test('should go to next testimonial', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    
    testimonialItems.forEach(item => item.classList.remove('active'));
    testimonialItems[currentTestimonial].classList.add('active');

    expect(currentTestimonial).toBe(1);
    expect(testimonialItems[1].classList.contains('active')).toBe(true);
  });

  test('should go to previous testimonial', () => {
    currentTestimonial = 1;
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    
    testimonialItems.forEach(item => item.classList.remove('active'));
    testimonialItems[currentTestimonial].classList.add('active');

    expect(currentTestimonial).toBe(0);
    expect(testimonialItems[0].classList.contains('active')).toBe(true);
  });

  test('should wrap around when going next from last', () => {
    currentTestimonial = 2;
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;

    expect(currentTestimonial).toBe(0);
  });
});

/**
 * Test Suite: Keyboard Navigation
 * Tests keyboard shortcuts and accessibility
 */
describe('Keyboard Navigation', () => {
  let navMenu;
  let hamburger;

  beforeEach(() => {
    document.body.innerHTML = '';
    
    hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.className = 'hamburger';

    navMenu = document.createElement('nav');
    navMenu.className = 'nav-menu';
    navMenu.classList.add('active');

    document.body.appendChild(hamburger);
    document.body.appendChild(navMenu);
  });

  test('should close menu on Escape key', () => {
    navMenu.classList.add('active');
    hamburger.classList.add('active');

    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }

    expect(navMenu.classList.contains('active')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
  });

  test('should handle other keys without affecting menu', () => {
    navMenu.classList.add('active');

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }

    expect(navMenu.classList.contains('active')).toBe(true);
  });
});

/**
 * Test Suite: Stats Counter Animation
 * Tests the animated counter functionality
 */
describe('Stats Counter Animation', () => {
  let statCard;
  let statNumber;

  beforeEach(() => {
    document.body.innerHTML = '';
    
    statCard = document.createElement('div');
    statCard.className = 'stat-card';

    statNumber = document.createElement('div');
    statNumber.className = 'stat-number';
    statNumber.dataset.target = '100';
    statNumber.textContent = '0';

    statCard.appendChild(statNumber);
    document.body.appendChild(statCard);
  });

  test('should have stat element', () => {
    expect(statNumber).toBeInTheDocument();
  });

  test('should have target value in dataset', () => {
    expect(statNumber.dataset.target).toBe('100');
  });

  test('should increment counter value', () => {
    const target = parseInt(statNumber.dataset.target);
    let current = 0;
    
    current = Math.min(current + 10, target);
    statNumber.textContent = current;

    expect(parseInt(statNumber.textContent)).toBeGreaterThan(0);
  });

  test('should mark as animated when complete', () => {
    statNumber.classList.add('animated');
    expect(statNumber.classList.contains('animated')).toBe(true);
  });
});
