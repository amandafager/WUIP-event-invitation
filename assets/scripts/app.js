
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);


let urlParams = new URLSearchParams(window.location.search);

  let name;

  if(urlParams.has("name")){
    name = urlParams.get("name");
  }
  else{
    name = "";
  }
      
let nameDiv = document.querySelector(".name");
nameDiv.textContent = name;

