/**
 * Contact Form Handler
 * Manages form validation and submission with Formspree integration
 */

// Initialize contact forms
function initContactForms() {
    const contactForms = document.querySelectorAll('form.contact-form, form.footer-contact-form');

    contactForms.forEach(form => {
        try {
            setupFormValidation(form);
            setupFormSubmission(form);
        } catch (error) {
            console.error('Failed to initialize contact form:', error);
        }
    });
}

/**
 * Setup real-time form validation
 * @param {HTMLFormElement} form - The form element to validate
 */
function setupFormValidation(form) {
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        // Validate on blur
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Clear error on input
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
                clearFieldError(input);
            }
            input.classList.add('valid');
        });
    });
}

/**
 * Setup form submission with backend integration
 * @param {HTMLFormElement} form - The form element
 */
function setupFormSubmission(form) {
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            // Validate all fields
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                showFormError(form, 'Please fill in all required fields correctly.');
                return;
            }

            // Disable submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            // Send to Formspree
            const formData = new FormData(form);
            const response = await fetch('https://formspree.io/f/xwpebrvr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormSuccess(form, 'Message sent successfully! I\'ll get back to you within 24-48 hours.');
                form.reset();

                // Reset visual states
                inputs.forEach(input => {
                    input.classList.remove('valid', 'error');
                });

                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormError(form, 'Failed to send message. Please try again or contact directly.');

            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }
    });
}

/**
 * Validates a single form field
 * @param {HTMLInputElement|HTMLTextAreaElement} field - The field to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateField(field) {
    if (!field) return false;

    const value = field.value.trim();
    const type = field.type;

    // Required field check
    if (!value) {
        field.classList.add('error');
        field.classList.remove('valid');
        return false;
    }

    // Email validation
    if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            field.classList.remove('valid');
            return false;
        }
    }

    // Minimum length checks
    if (field.id === 'message' && value.length < 10) {
        field.classList.add('error');
        field.classList.remove('valid');
        return false;
    }

    field.classList.remove('error');
    field.classList.add('valid');
    return true;
}

/**
 * Display form success message
 * @param {HTMLFormElement} form - The form element
 * @param {string} message - Success message text
 */
function showFormSuccess(form, message) {
    try {
        // Remove existing message if present
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) {
            existingMsg.remove();
        }

        // Create success message element
        const msgElement = document.createElement('div');
        msgElement.className = 'form-message success-message px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 mb-4';
        msgElement.setAttribute('role', 'alert');
        msgElement.textContent = '✓ ' + message;

        // Insert before submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.parentNode.insertBefore(msgElement, submitBtn);
        } else {
            form.appendChild(msgElement);
        }

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (msgElement && msgElement.parentNode) {
                msgElement.remove();
            }
        }, 5000);
    } catch (error) {
        console.error('Error displaying success message:', error);
    }
}

/**
 * Display form error message
 * @param {HTMLFormElement} form - The form element
 * @param {string} message - Error message text
 */
function showFormError(form, message) {
    try {
        // Remove existing message if present
        const existingMsg = form.querySelector('.form-message');
        if (existingMsg) {
            existingMsg.remove();
        }

        // Create error message element
        const msgElement = document.createElement('div');
        msgElement.className = 'form-message error-message px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 mb-4';
        msgElement.setAttribute('role', 'alert');
        msgElement.textContent = '✗ ' + message;

        // Insert at top of form
        form.insertBefore(msgElement, form.firstChild);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (msgElement && msgElement.parentNode) {
                msgElement.remove();
            }
        }, 5000);
    } catch (error) {
        console.error('Error displaying error message:', error);
    }
}

/**
 * Clear field error display
 * @param {HTMLInputElement|HTMLTextAreaElement} field - The field to clear
 */
function clearFieldError(field) {
    if (!field) return;

    try {
        const formGroup = field.closest('.form-group');
        if (formGroup) {
            const errorMsg = formGroup.querySelector('.field-error');
            if (errorMsg) {
                errorMsg.remove();
            }
        }
    } catch (error) {
        console.error('Error clearing field error:', error);
    }
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForms);
} else {
    initContactForms();
}

// Re-initialize forms if they're dynamically added
const observer = new MutationObserver((mutations) => {
    try {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && (node.matches('form') || node.querySelector('form'))) {
                    initContactForms();
                }
            });
        });
    } catch (error) {
        console.error('Error in mutation observer:', error);
    }
});

observer.observe(document.body, { childList: true, subtree: true });
