// script.js

document.getElementById('register-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.registration-form').style.display = 'block';
  });
  
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    // Placeholder for actual authentication logic
    if (username === 'user' && password === 'pass') {
      document.querySelector('.login-form').style.display = 'none';
      document.querySelector('.welcome').style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  });
  
  document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
  
    if (password === confirmPassword) {
      // Placeholder for actual registration logic
      document.querySelector('.registration-form').style.display = 'none';
      document.querySelector('.welcome').style.display = 'block';
    } else {
      alert('Passwords do not match');
    }
  });
  
