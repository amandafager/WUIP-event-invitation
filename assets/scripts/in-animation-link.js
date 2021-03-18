(function() {
  const link = document.querySelector('.go-to-form');
  
  function animateLink() {
    link.classList.add('animate-link');
  }
  
  function removeAnimationLink() {
    link.classList.add('normal-link');
    link.classList.remove('animate-link'); 
  }
    
  window.addEventListener('load', animateLink);
  window.addEventListener('resize', removeAnimationLink); 
	
})();