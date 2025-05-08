const imagePaths = [
    'assets/images (8).jpeg', 
    'assets/images (9).jpeg', 
    'assets/akillixLogo.jpg'  
  ];
  
  let currentImage = 0;
  
  function changeBackground() {
    const background = document.getElementById('background');
    
    background.style.backgroundImage = `url(${imagePaths[currentImage]})`;
    currentImage = (currentImage + 1) % imagePaths.length;
  }
  

  