// Wait for the DOM to be fully loaded

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contact-form');
    
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Function to show error message
    function showError(input, message) {
        // Remove any existing error message
        const existingError = input.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }
        
        // Create and insert error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
        
        // Add red border to input
        input.style.borderColor = 'red';
    }
    
    // Function to remove error message
    function removeError(input) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.remove();
        }
        input.style.borderColor = '';
    }
    
    // Function to validate a required field
    function validateRequired(input) {
        if (input.value.trim() === '') {
            showError(input, `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required`);
            return false;
        }
        removeError(input);
        return true;
    }
    
    // Function to validate email format
    function validateEmail(input) {
        if (!emailRegex.test(input.value.trim())) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
        removeError(input);
        return true;
    }
    
    // Add real-time validation on input
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (input.type === 'email') {
                validateEmail(input);
            } else {
                validateRequired(input);
            }
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get all form inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');
        
        // Flag to track validation status
        let isValid = true;
        
        // Validate all fields
        isValid = validateRequired(name) && isValid;
        isValid = validateRequired(subject) && isValid;
        isValid = validateRequired(message) && isValid;
        
        // Validate email separately
        isValid = validateEmail(email) && isValid;
        
        // If all validations pass
        if (isValid) {
            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.style.color = 'green';
            successMessage.style.padding = '10px';
            successMessage.style.marginTop = '10px';
            successMessage.textContent = 'Form submitted successfully!';
            
            // Add success message to the form
            form.appendChild(successMessage);
            
            // Optional: Reset the form
            form.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
            
            // Here you would typically send the form data to a server
            console.log('Form submitted with:', {
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            });
        }
    });
});
