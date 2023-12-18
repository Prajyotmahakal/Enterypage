function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = 'eye-close.jpg';
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = 'eye-open1.png';
    }
  }
  
  function handleEnter(event) {
    if (event.key === 'Enter') {
      const passwordInput = document.getElementById('password').value;
  
     
      if (passwordInput === '02071401') {
    
        window.location.href = 'https://www.google.com'; 
      } 
    }
  }
  
  
  
