// ============================================
// MODALS - SIGN IN / SIGN UP
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeModals();
});

function initializeModals() {
    const modals = document.querySelectorAll('.modal');

    modals.forEach(modal => {
        // Close button
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active');
                toggleBodyScroll(false);
            });
        }

        // Close when clicking outside modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                toggleBodyScroll(false);
            }
        });

        // Handle form submission
        const form = modal.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                handleModalSubmit(modal);
            });
        }
    });
}

function handleModalSubmit(modal) {
    const modalId = modal.id;
    const formInputs = modal.querySelectorAll('input');
    const data = {};

    formInputs.forEach(input => {
        data[input.name || input.type] = input.value;
    });

    console.log('Form submitted:', modalId, data);

    // Simulate form submission
    const submitBtn = modal.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Success message
        alert('Success! You will be redirected shortly.');
        
        // Close modal
        modal.classList.remove('active');
        toggleBodyScroll(false);
        
        // Reset form
        modal.querySelector('form').reset();
    }, 1500);
}

// ============================================
// EXPORT MODAL FUNCTIONS
// ============================================

window.initializeModals = initializeModals;
window.handleModalSubmit = handleModalSubmit;
