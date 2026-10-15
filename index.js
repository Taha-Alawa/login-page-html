const form = document.querySelector('#loginForm');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log("الإيميل: " + email + "\nكلمة المرور: " + password);
})