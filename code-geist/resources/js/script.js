$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

var myIndex = 0;
lights();


function lights() {
    var i;
    var x = document.getElementsByClassName("lighten");
    for (i = 0; i < x.length; i++) {
       x[i].classList.remove("light");
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].classList.add("light");
    setTimeout(lights, 500); // Change image every 0.5 seconds
}
