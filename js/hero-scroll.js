// Script para mejorar la funcionalidad del scroll de los botones flecha en los heroes
document.addEventListener('DOMContentLoaded', function() {
  const flechaButtons = document.querySelectorAll('.flecha-scroll');
  
  flechaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.main-header')?.offsetHeight || 70;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
