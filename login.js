/**
 * @fileoverview Handles the login form submission and validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get the login form and message container elements from the HTML
    const loginForm = document.getElementById('login-form');
    const messageContainer = document.getElementById('message-container');

    // Function to show a message to the user
    const showMessage = (message, type) => {
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';
        if (type === 'error') {
            messageContainer.style.color = '#e74c3c'; // Red
        } else {
            messageContainer.style.color = '#2ecc71'; // Green
        }
    };

    if (loginForm) {
        // Add a submit event listener to the form
        loginForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior (which reloads the page)
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            
            const email = emailInput.value;
            const password = passwordInput.value;

            // Simple validation to ensure fields are not empty.
            // This is a placeholder for a real API call to a backend.
            if (email.trim() !== '' && password.trim() !== '') {
                showMessage('Login successful! Redirecting to dashboard...', 'success');
                // Redirect the user to the dashboard page
                window.location.href = 'dashboard.html';
                console.log('Login successful! Redirecting to dashboard...');
            } else {
                showMessage('Please enter both email and password.', 'error');
                console.log('Login failed: Missing credentials.');
            }
        });
    }
});
