document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        input.classList.add('error');
    };

    const clearError = (input) => {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');
        input.classList.remove('error');
    };

    const checkEmail = (input) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (re.test(input.value.trim())) {
            clearError(input);
        } else {
            showError(input, 'Invalid email format');
        }
    };

    const checkPasswordsMatch = (password, confirmPassword) => {
        if (password.value === confirmPassword.value) {
            clearError(confirmPassword);
        } else {
            showError(confirmPassword, 'Passwords do not match');
        }
    };

    emailInput.addEventListener('input', () => checkEmail(emailInput));
    confirmPasswordInput.addEventListener('input', () => checkPasswordsMatch(passwordInput, confirmPasswordInput));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        checkEmail(emailInput);
        checkPasswordsMatch(passwordInput, confirmPasswordInput);

        if (form.checkValidity()) {
            alert('Form submitted successfully!');
            form.reset(); // Reset the form fields to be blank
        }
    });
});
