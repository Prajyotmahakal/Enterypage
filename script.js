function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = 'eye-close.jpg';
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = 'eye-open.png';
    }
  }
  