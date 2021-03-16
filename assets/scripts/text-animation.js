
(function() {
  let elements;
  let windowHeight;

  function checkPositionAddAnimation() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    
    }
  }

  function removeAnimationOnResize() {
    elements = document.querySelectorAll('.fade-in-element');
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.remove('fade-in-element');
      
    }
  }

  window.addEventListener('scroll', checkPositionAddAnimation);
  window.addEventListener('resize', removeAnimationOnResize);
  
})();








  

