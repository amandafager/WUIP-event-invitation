(function() {
    
    let urlParams = new URLSearchParams(window.location.search);
    let name;
    let email;
  
    if (urlParams.has('name', 'email')) {
      name = urlParams.get('name');
      email = urlParams.get('email');
    }
    else {
      name = '';
      email = '';
    }
  
    let nameInTitle = document.querySelectorAll('.guest-name');
    let nameForm = document.querySelector('.name input');
    let emailForm = document.querySelector('.email input');
    
    nameForm.value = name;
    emailForm.value = email;
    
    nameInTitle.forEach(element => {
      element.textContent = name;
    });
  
})();