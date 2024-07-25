document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Add form validation or additional logic here

        alert(`Logging in with Username: ${username}`);
        loginForm.submit();
    });
});
