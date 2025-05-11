document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // In a real application, you would send the login credentials to a backend server
        // for verification using technologies like Fetch API.
        console.log('Login data:', {
            email: loginForm.email.value,
            password: loginForm.password.value
        });

        // For this front-end example, we'll just simulate a successful login
        // (without actual verification).
        if (loginForm.email.value && loginForm.password.value) {
            displayMessage('Login successful!', 'success');
            // In a real app, you would redirect the user to a logged-in page here.
            // window.location.href = '/dashboard.html';
        } else {
            displayMessage('Invalid email or password.', 'error');
        }

        loginForm.reset(); // Clear the form
    });

    function displayMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.className = 'message ' + type;
    }
});