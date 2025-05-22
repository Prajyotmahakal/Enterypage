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
  
     
      if (passwordInput === 'Pravanya2204') {
    
        window.location.href = 'spage.html'; 
      } 
    else{
        console.log("Wrong Password");
    }
  }
  
 var quotes=["The Engineer Has Been ,And Is ,A Maker of History.","Software Is A Great Combination Between Artisty And Engineering","Talk Is Cheap. Show Me The Code .","While There's Code .There's Bug .","It's not a bug, it's a feature.","The best error message is the one that never shows up."
,"Programming is thinking, not typing.","Debugging is like being the detective in a crime movie where you are also the murderer."];


 
  function getRandomQuote(){

    var index=Math.floor(Math.random()*quotes.length);

    return quotes[index];

  }

  function updateQuote(){

    const quotePara= document.getElementById("quotes");

    
    quotePara.innerHTML=getRandomQuote();

  }

  setInterval(updateQuote,8000);

