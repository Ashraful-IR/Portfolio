/**
 * Portfolio Website - JavaScript
 * Lightweight, accessible interactivity
 */

document.addEventListener('DOMContentLoaded', () => {

    // ========== DOM Elements ==========
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // ========== Smooth Scrolling ==========
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement && navbar) {
            e.preventDefault();

            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }

            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            updateActiveLink(targetId);
        }
    });

    // ========== Active Link Highlighting ==========
    function updateActiveLink(targetId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (!navbar) return;

        const sections = document.querySelectorAll('section[id]');
        const navHeight = navbar.offsetHeight;
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {
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
    if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log('Hamburger toggled');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
} else {
    console.log('Hamburger or navMenu not found in DOM');
}

    // ========== Navbar Shadow ==========
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        navbar.style.boxShadow =
            window.scrollY > 10 ? 'var(--shadow-md)' : 'none';
    });

    // ========== Prefetch ==========
    document.addEventListener('mouseover', (e) => {
        const link = e.target.closest('a[href$=".html"]');
        if (link && !link.href.startsWith('http')) {
            const l = document.createElement('link');
            l.rel = 'prefetch';
            l.href = link.href;
            document.head.appendChild(l);
        }
    });

    // ========== Intersection Observer ==========
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

        document.querySelectorAll(
            '.project-card, .skill-category, .stat-item, .contact-link'
        ).forEach(el => {
            el.style.opacity = '0.7';
            el.style.transform = 'translateY(10px)';
            el.style.transition =
                'opacity 0.4s ease-out, transform 0.4s ease-out';
            observer.observe(el);
        });
    }

    console.log('Portfolio JS loaded successfully');
});
