/*
    JS logic for the Sign Up Page
    - Handles form submission for a dummy user registration.
*/

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const messageContainer = document.getElementById('message-container');

    const showMessage = (message, type = 'error') => {
        messageContainer.textContent = message;
        messageContainer.className = `message ${type}`;
        messageContainer.style.display = 'block';
    };

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // In a real application, you would send this data to a backend.
        // For this dummy app, we'll just simulate a successful registration.
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        
        if (password !== confirmPassword) {
            showMessage("Passwords do not match.");
            return;
        }

        // Simulate a successful registration
        showMessage("Registration successful! You can now log in.", "success");
        
        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = 'adminlogin.html';
        }, 2000);
    });
});
