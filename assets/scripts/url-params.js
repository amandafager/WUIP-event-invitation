(function() {
    let urlParams = new URLSearchParams(window.location.search);
    let name;
    let email;
    let nameForTitle;

    let namesSpaceInTitle = document.querySelectorAll('.guest-name');
    let nameForm = document.querySelector('.name input');
    let emailForm = document.querySelector('.email input');
  
    if (urlParams.has('name', 'email')) {
      name = urlParams.get('name');
      email = urlParams.get('email');
      nameForTitle = name;
      nameForm.value = name;
      emailForm.value = email;
      
      
      namesSpaceInTitle.forEach(element => {
          element.textContent = nameForTitle;
        });
    }
    else {
        name;
        email;
        nameForTitle = '';
    }
    
})();