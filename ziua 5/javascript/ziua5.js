// change image on click
var y = document.getElementsByClassName("img1");

for(var i = 0; i < y.length; i++){
  y[i].addEventListener("click", function(){change(this)}, false);
}

var bigImage = document.getElementById("pic1");

function change(event){
  var c;
  c = event.src;
	event.src = bigImage.src;
  bigImage.src = c;

}

// open image in a new tab
var show = document.getElementById("pic1");
show.addEventListener("click", showImage, false);

function showImage() {
	var image1 = document.getElementById('pic1');
	var sursa = document.getElementById('schimba');
	var c;

	if(image1.src.match("nike3.jpg")){
		sursa.href = "http://www.freerun4.com/images/Nike-Roshe-Run-Men-Black-White-4.jpg";
	}
	if(image1.src.match("1")){
		sursa.href = "http://www.yomister.com/image/data/0/nike-all/Nike-Casual-Mens/Nike-Roshe-Running/Nike-Roshe-Run-Mens-Shoes-Breathable-For-Summer-Black-New-Arrival-4361_1.jpg";
	}
	 if(image1.src.match("nike2")){
		sursa.href = "http://images.nike.com/is/image/DotCom/511881_E_V1?&$img=511881_010_E_PREM&$PDP_HERO$";
	}
}
