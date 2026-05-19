// ============================================
// MAIN JAVASCRIPT - THEANGEL WEBSITE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeButtons();
    initializeEmailForm();
});

// ============================================
// NAVIGATION HAMBURGER MENU
// ============================================

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navButtons.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navButtons.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ============================================
// BUTTON INTERACTIONS
// ============================================

function initializeButtons() {
    const signinBtn = document.querySelector('.btn-signin');
    const signupBtn = document.querySelector('.btn-signup');
    const primaryBtns = document.querySelectorAll('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');

    // Sign In button
    if (signinBtn) {
        signinBtn.addEventListener('click', function() {
            openModal('signin-modal');
        });
    }

    // Sign Up button
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            openModal('signup-modal');
        });
    }

    // Primary buttons (Hero section)
    primaryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.textContent.includes('Sign')) {
                e.preventDefault();
                openModal('signin-modal');
            }
        });
    });

    // Secondary button
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', function() {
            const tradingSection = document.querySelector('#trading');
            if (tradingSection) {
                tradingSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ============================================
// EMAIL FORM HANDLING
// ============================================

function initializeEmailForm() {
    // Hero email form
    const heroEmailForm = document.getElementById('hero-email-form');
    if (heroEmailForm) {
        heroEmailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log('Hero email submitted:', email);
            // Redirect to sign up with email
            openModal('signup-modal');
            this.reset();
        });
    }

    // Footer email form
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log('Email submitted:', email);
            // Here you would send the email to your backend
            alert('Thank you! Check your email for the investor pack.');
            this.reset();
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Prevent body scroll when modal is open
function toggleBodyScroll(disable) {
    if (disable) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}
