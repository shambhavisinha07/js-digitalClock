function updateTime() {
    const clock = document.getElementById('clock-container');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateTime, 1000);
  }
  
  function changeBackground() {
    const backgrounds = [
      'https://source.unsplash.com/random/1920x1080',
      'https://source.unsplash.com/random/1920x1081',
      'https://source.unsplash.com/random/1920x1082'
      // Add more URLs as needed
    ];
    
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
  }
  
  document.getElementById('clock-container').addEventListener('click', () => {
    const greetings = ['Hello!', 'Hi there!', 'Greetings!', 'Welcome!', 'Howdy!'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    alert(randomGreeting);
  });
  
  updateTime();
  changeBackground(); // Change background on page load
  
  setInterval(changeBackground, 10000); // Change background every 10 seconds
  