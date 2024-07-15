document.addEventListener('DOMContentLoaded', () => {
    let startX = 0;
    let currentX = 0;
    let threshold = 50; // Minimum swipe distance to open/close the menu
    const navContainer = document.getElementById('nav-container');
  
    navContainer.addEventListener('touchstart', (event) => {
      startX = event.touches[0].pageX;
    });
  
    navContainer.addEventListener('touchmove', (event) => {
      currentX = event.touches[0].pageX;
    });
  
    navContainer.addEventListener('touchend', () => {
      if (currentX - startX > threshold) {
        navContainer.classList.add('active'); // Open the menu
      } else if (startX - currentX > threshold) {
        navContainer.classList.remove('active'); // Close the menu
      }
    });
  });
  