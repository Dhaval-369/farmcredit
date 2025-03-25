// Sign-Up Form Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate password
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Save user data to local storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Sign-Up successful! Redirecting to Login...');
        window.location.href = 'login.html'; // Redirect to Login Page
    });
}

// Login Form Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Retrieve stored user data
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Validate credentials
        if (email === storedEmail && password === storedPassword) {
            alert('Login successful! Redirecting to Dashboard...');
            window.location.href = 'dashboard.html'; // Redirect to Dashboard
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
}

// Dashboard Logic
const userName = localStorage.getItem('userName');
if (userName) {
    document.getElementById('userName').textContent = userName;
} else {
    alert('You are not logged in. Redirecting to Login...');
    window.location.href = 'login.html'; // Redirect to Login Page
}