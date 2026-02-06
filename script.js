/**
 * Portfolio Website - JavaScript
 * Lightweight, accessible interactivity
 */

// ========== DOM Elements ==========
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// ========== Smooth Scrolling ==========
/**
 * Handle smooth scrolling for navigation links
 */
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    
    if (!link) return;
    
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if it's open
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Calculate offset for fixed navbar
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        // Smooth scroll
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Update active link
        updateActiveLink(targetId);
    }
});

// ========== Active Link Highlighting ==========
/**
 * Update active navigation link based on scroll position
 */
function updateActiveLink(targetId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

/**
 * Highlight active section on scroll
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = navbar.offsetHeight;
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    if (currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
});

// ========== Mobile Menu Toggle ==========
/**
 * Handle mobile hamburger menu
 */
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ========== Navbar Shadow on Scroll ==========
/**
 * Add shadow to navbar when scrolled
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ========== Prefetch Links ==========
/**
 * Prefetch internal links for faster navigation
 */
document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a[href$=".html"]');
    if (link && !link.href.startsWith('http')) {
        const link_element = document.createElement('link');
        link_element.rel = 'prefetch';
        link_element.href = link.href;
        document.head.appendChild(link_element);
    }
});

// ========== Animation: Intersection Observer ==========
/**
 * Trigger animations when elements come into view
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards and skill categories
    document.querySelectorAll('.project-card, .skill-category, .stat-item, .contact-link').forEach(el => {
        el.style.opacity = '0.7';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        observer.observe(el);
    });
}

// ========== Utility Functions ==========

/**
 * Debounce function for scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========== Console Message ==========
console.log('%cPortfolio Website', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cDesigned and built with care.', 'font-size: 14px; color: #6b7280;');
