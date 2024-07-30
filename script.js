function myFunction(x) {
    if (x.matches) { 
      navbar.style.backgroundColor = "grey";
    } else {
      navbar.style.backgroundColor = "black";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x);

  x.addEventListener("change", function() {
    myFunction(x);
  });
