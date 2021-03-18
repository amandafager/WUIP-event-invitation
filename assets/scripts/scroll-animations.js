(function() {
  let elements;
  let windowHeight;
  let smokePaths;

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

    function addSmokeAnimation(elements, className) {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
      
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add(className);
        }
      }
    }

    smokePaths = document.querySelectorAll('.smoke-desk path');
    smokePathsMob = document.querySelectorAll('.smoke-blobs path');

    addSmokeAnimation(smokePaths, 'smoke-animation-desk');
    addSmokeAnimation(smokePathsMob, 'smoke-animation-mobil');
  }

  function removeTextAnimationOnResize() {
    elements = document.querySelectorAll('.fade-in-element');

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.remove('fade-in-element');
    }
  }

  window.addEventListener('scroll', checkPositionAddAnimation);
  window.addEventListener('resize', removeTextAnimationOnResize);

})();















  

