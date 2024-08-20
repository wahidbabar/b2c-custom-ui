document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('email').textContent.trim();
  const password = document.getElementById('password').textContent.trim();
  const keepLoggedIn = document.getElementById('keepLoggedIn').checked;

  // Clear any previous error messages
  document.getElementById('errorMessage').textContent = '';

  // Basic validation
  if (!email || !password) {
    document.getElementById('errorMessage').textContent =
      'Email and password are required.';
    return;
  }

  // Here you would handle the submission logic, for example, calling the Azure AD B2C API
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Keep me logged in:', keepLoggedIn);

  // Example of handling login success/failure
  // Assume a function handleLogin is available to manage Azure AD B2C interaction
  handleLogin(email, password, keepLoggedIn);
});

function handleLogin(email, password, keepLoggedIn) {
  // Mock function to simulate login, replace with actual logic
  if (email === 'user@example.com' && password === 'password') {
    window.location.href = '/dashboard'; // Redirect on successful login
  } else {
    document.getElementById('errorMessage').textContent =
      'Invalid credentials.';
  }
}
