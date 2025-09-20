/*
    JS logic for the Settings Page
    - Handles form submission for security settings and logout.
*/

document.addEventListener('DOMContentLoaded', () => {
    const securityForm = document.getElementById('security-form');
    const logoutBtn = document.getElementById('logout-btn');
    const messageContainer = document.getElementById('message-container');

    const showMessage = (message, type = 'success') => {
        messageContainer.textContent = message;
        messageContainer.className = `message ${type}`;
        messageContainer.style.display = 'block';
    };

    securityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would send this to the backend
        showMessage('Security settings updated successfully!');
    });

    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real application, you would clear the user session
        alert('You have been logged out.');
        window.location.href = 'index.html';
    });
});
