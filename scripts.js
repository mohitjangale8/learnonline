document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.btn-login');
    const signupButton = document.querySelector('.btn-signup');

    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    signupButton.addEventListener('click', function() {
        window.location.href = 'signup.html'; 
    });
});

