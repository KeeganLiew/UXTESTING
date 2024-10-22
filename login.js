document.addEventListener('DOMContentLoaded', (event) => {
  const correctPassword = 'correct_password';

  function validatePassword(password) {
    return password === correctPassword;
  }

  document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (validatePassword(password)) {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('exerciseContent').style.display = 'block';
    } else {
      alert('Incorrect password. Please try again.');
    }
  });
});
