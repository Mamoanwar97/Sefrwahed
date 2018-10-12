$(document).ready(function(){
  $('.js--who').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky animated fadeInDown');
      $('.logo').addClass('nav-logo');
    } else {
      $('nav').removeClass('sticky animated fadeInDown');
      $('.logo').removeClass('nav-logo');
    }},{
      offset: '90%;'
    });
    $('.js--scroll-to-events').click(function () {
       $('html, body').animate({scrollTop: $('.js--events').offset().top-40}, 1000);
    });
    $('.js--scroll-to-who').click(function () {
       $('html, body').animate({scrollTop: $('.js--who').offset().top-40}, 1000);
    });
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top-40}, 1000);
            return false;
          }
        }
      });
    });
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
      },{
        offset: '80%;'
      });
    $('.js--wp-event1').waypoint(function(direction) {
      $('.js--wp-event1').addClass('animated flipInX');
      },{
        offset: '80%;'
      });
    $('.js--wp-code').waypoint(function(direction) {
      $('.js--wp-code').addClass('animated jackInTheBox');
      },{
        offset: '70%;'
      });
    $('.js--wp-touch').waypoint(function(direction) {
      $('.js--wp-touch').addClass('animated zoomIn');
      },{
        offset: '70%;'
      });
    $(".option").click(function(){
      $(".option").removeClass("active");
      $(this).addClass("active");
    });
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}
