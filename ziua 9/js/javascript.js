$(document).ready(function(){


    $(".one").click(function(){
        $(this).toggleClass('active');
        $(".two").removeClass('active');
        $(".three").removeClass('active');

        $(".backk").toggleClass('sq1');
        $(".backk").removeClass('sq2');
        $(".backk").removeClass('sq3');

    });

     $(".two").click(function(){
        $(this).toggleClass('active');
        $(".one").removeClass('active');
        $(".three").removeClass('active');

        $(".backk").toggleClass('sq2');
        $(".backk").removeClass('sq1');
        $(".backk").removeClass('sq3');
    });

      $(".three").click(function(){
        $(this).toggleClass('active');
        $(".two").removeClass('active');
        $(".one").removeClass('active');

        $(".backk").toggleClass('sq3');
        $(".backk").removeClass('sq2');
        $(".backk").removeClass('sq1');

    });

});

var y = document.getElementsByClassName("img1");

for(var i = 0; i < y.length; i++){
  y[i].addEventListener("click", function(){change(this)}, false);
}

var bigImage = document.getElementById("bigimg");

function change(event){
  var c;
  c = event.src;
  event.src = bigImage.src;
  bigImage.src = c;
}
