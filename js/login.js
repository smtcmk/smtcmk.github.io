document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic authentication for testing
    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        // TODO: Redirect to dashboard or main page
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});