function displayGreeting() {
    const currentTime = new Date().getHours();
    let greetingMessage;
  
    if (currentTime >= 5 && currentTime < 12) {
      greetingMessage = 'Good Morning!';
    } else if (currentTime >= 12 && currentTime < 17) {
      greetingMessage = 'Good Afternoon!';
    } else if (currentTime >= 17 && currentTime < 20) {
      greetingMessage = 'Good Evening!';
    } else {
      greetingMessage = 'Good Night!';
    }
  
    alert(greetingMessage);
  }
  
  