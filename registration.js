document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registrationMessage = document.getElementById('registrationMessage');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        if (passwordInput.value !== confirmPasswordInput.value) {
            displayMessage('Passwords do not match!', 'error');
            return;
        }

        // In a real application, you would send this data to a backend server
        // for processing and database storage using technologies like Fetch API.
        console.log('Registration data:', {
            name: registrationForm.name.value,
            email: registrationForm.email.value,
            password: passwordInput.value
        });

        // For this front-end example, we'll just simulate a successful registration
        displayMessage('Registration successful! You can now log in.', 'success');
        registrationForm.reset(); // Clear the form
    });

    function displayMessage(message, type) {
        registrationMessage.textContent = message;
        registrationMessage.className = 'message ' + type;
    }
});