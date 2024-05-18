
document.addEventListener("DOMContentLoaded", function() {
  // Form validation for the login form
  const loginBtn = document.querySelector('.btn.mt-4');
  const emailInput = document.querySelector('.card-front .form-group input[type="email"]');
  const passwordInput = document.querySelector('.card-front .form-group input[type="password"]');
  
  loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    let valid = true;
    
    // Email validation
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      valid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    // Password validation
    if (passwordInput.value.trim() === "") {
      passwordInput.classList.add('is-invalid');
      valid = false;
    } else {
      passwordInput.classList.remove('is-invalid');
    }

    if (valid) {
      window.location.href = "C:\\Users\\ammu1\\OneDrive\\Desktop\\uid_end_sem\\chatbot.html";
    }
  });

  // Form validation for the sign-up form
  const registerBtn = document.querySelector('.card-back .btn.mt-4');
  const fullNameInput = document.querySelector('.card-back .form-group input[placeholder="Full Name"]');
  const phoneInput = document.querySelector('.card-back .form-group input[placeholder="Phone Number"]');
  const signupEmailInput = document.querySelector('.card-back .form-group input[placeholder="Email"]');
  const signupPasswordInput = document.querySelector('.card-back .form-group input[placeholder="Password"]');
  
  registerBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    let valid = true;
    
    // Full Name validation
    if (fullNameInput.value.trim() === "") {
      fullNameInput.classList.add('is-invalid');
      valid = false;
    } else {
      fullNameInput.classList.remove('is-invalid');
    }

    // Phone Number validation
    if (phoneInput.value.trim() === "") {
      phoneInput.classList.add('is-invalid');
      valid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
    }

    // Email validation
    if (!validateEmail(signupEmailInput.value)) {
      signupEmailInput.classList.add('is-invalid');
      valid = false;
    } else {
      signupEmailInput.classList.remove('is-invalid');
    }

    // Password validation
    if (signupPasswordInput.value.trim() === "") {
      signupPasswordInput.classList.add('is-invalid');
      valid = false;
    } else {
      signupPasswordInput.classList.remove('is-invalid');
    }

    if (valid) {
      window.location.href = "C:\\Users\\ammu1\\OneDrive\\Desktop\\uid_end_sem\\wellcom.html";
    }
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});
