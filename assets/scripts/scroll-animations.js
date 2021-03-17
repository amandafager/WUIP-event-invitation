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
      else {
        element.classList.add('hidden');
        element.classList.remove('fade-in-element');
      }
    
    }

    smokePaths = document.querySelectorAll('.smoke-desk path');
    smokePathsMob = document.querySelectorAll('.smoke-blobs path');

    for (let i = 0; i < smokePaths.length; i++) {
      let smokePath = smokePaths[i];
      let positionFromTop = smokePaths[i].getBoundingClientRect().top;


      if (window.scrollY > positionFromTop + windowHeight){
      
        smokePath.classList.add('smoke-animation-desk');
        //smokePath.classList.remove('smoke-animation-desk');
       
      } else {
        smokePath.classList.add('smoke-animation-desk');
      }
    
      /*if (positionFromTop - windowHeight <= 0) {
        smokePath.classList.add('smoke-animation-desk');
      }*/
    }


    for (let i = 0; i < smokePathsMob.length; i++) {
      let smokePath = smokePathsMob[i];
      let positionFromTop = smokePathsMob[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        smokePath.classList.add('smoke-animation-mobil');
      }


      /*if (window.scrollY > positionFromTop + windowHeight){
      
        smokePath.classList.add('smoke-animation-mobil');
        //smokePath.classList.remove('smoke-animation-desk');
       
      } else {
        smokePath.classList.add('smoke-animation-mobil');
      }*/
  
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








  

