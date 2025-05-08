const loginBox = document.querySelector('.login-box');
const registerBox = document.querySelector('.register-box');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginBox.classList.remove('active');
  registerBox.classList.add('active');
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerBox.classList.remove('active');
  loginBox.classList.add('active');
});

