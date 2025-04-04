function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const title = document.getElementById('form-title');
  
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'flex';
      registerForm.style.display = 'none';
      title.innerText = 'Login';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'flex';
      title.innerText = 'Register';
    }
  }
  
  // Simple frontend storage (use real DB/server for production)
  const users = [];
  
  function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
  
    users.push({ username, email, password });
    alert("Registered successfully!");
    toggleForm();
    return false;
  }
  
  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert("Login successful!");
      window.location.href = "index.html"; // Replace with your main project page
    } else {
      alert("Invalid credentials!");
    }
    return false;
  }
  