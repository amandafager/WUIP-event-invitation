
window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);



(function() {
  let elements;
  let windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    
    }
  }
  
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();




let urlParams = new URLSearchParams(window.location.search);

  let name;
  let email;

  if(urlParams.has("name")){
    name = urlParams.get("name");
    email = urlParams.get("email");
  }
  else{
    name = "";
    email = "";
  }


  

let nameDiv = document.querySelectorAll(".guest-name");

nameDiv.forEach(element => {
  element.textContent = `${name}, ${email}`;
});


  


//?name=Amanda&email=amanda@gmail.com