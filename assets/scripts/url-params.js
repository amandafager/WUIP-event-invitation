(function() {
    let urlParams = new URLSearchParams(window.location.search);
    let name;
    let email;
    let nameForTitle;

    let namesSpaceInTitle = document.querySelectorAll('.guest-name');
    let nameForm = document.querySelector('.name input');
    let emailForm = document.querySelector('.email input');
    let p = document.querySelector('.sign-up-p');
   
  
    if (urlParams.has('name', 'email')) {
      name = urlParams.get('name');
      email = urlParams.get('email');
      nameForTitle = name;
      nameForm.value = name;
      emailForm.value = email;

      p.textContent = "Click on count me in to sign up!"
      
      
      namesSpaceInTitle.forEach(element => {
          element.textContent = nameForTitle;
        });
    }
    
})();