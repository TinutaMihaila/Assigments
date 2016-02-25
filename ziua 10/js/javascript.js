var y = document.getElementsByClassName("img1");

for(var i = 0; i < y.length; i++){
  y[i].addEventListener("click", function(){change(this)}, false);
}

var bigImage = document.getElementById("pic1");

function change(event){
  var c;
  c = event.src;
  bigImage.src = c;

  for(var i = 0; i < y.length; i++){
    y[i].classList.remove("activ");
    y[i].classList.add("inactiv");
  }

  event.classList.remove("inactiv");
  event.classList.add("activ");

}
