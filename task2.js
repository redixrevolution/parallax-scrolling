// Parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    
    // Adjust each layer's position at different rates
    document.querySelector('.layer-1').style.transform = `translateY(${scrolled * 0.1}px)`;
    document.querySelector('.layer-2').style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
    document.querySelector('.layer-3').style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    
    // Fade in text elements when they come into view
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;
      
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      }
    });
  });
  
  // Generate twinkling stars
  function createStars() {
    const container = document.getElementById('starsContainer');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size (some stars larger than others)
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random twinkle animation duration and delay
      star.style.setProperty('--duration', `${Math.random() * 4 + 2}s`);
      star.style.setProperty('--delay', `${Math.random() * 5}s`);
      star.style.setProperty('--brightness', `${Math.random() * 0.7 + 0.3}`);
      
      container.appendChild(star);
    }
  }
  
  // Add mouse parallax effect to enhance depth
  function mouseParallax() {
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Move layers slightly based on mouse position
      document.querySelector('.layer-1').style.transform = 
        `translateY(${window.scrollY * 0.1}px) translateX(${(x - 0.5) * -10}px)`;
      document.querySelector('.layer-2').style.transform = 
        `translateY(${window.scrollY * 0.3}px) translateX(${(x - 0.5) * -20}px) scale(1.05)`;
      document.querySelector('.layer-3').style.transform = 
        `translateY(${window.scrollY * 0.5}px) translateX(${(x - 0.5) * -30}px) scale(1.1)`;
      
      // Adjust orbit tilt based on mouse position
      document.querySelector('.orbit').style.transform = 
        `translate(-50%, -50%) rotateX(${(y - 0.5) * 20}deg) rotateY(${(x - 0.5) * -20}deg)`;
    });
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    createStars();
    mouseParallax();
    
    // Trigger initial scroll check for elements in view
    setTimeout(function() {
      window.dispatchEvent(new Event('scroll'));
    }, 500);
  });