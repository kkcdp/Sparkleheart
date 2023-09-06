$(document).ready(function() {		
  $(window).scroll(function() {

   var footertotop = ($('.footer').position().top);
   var scrolltop = $(document).scrollTop() + window.innerHeight;
   var difference = scrolltop-footertotop;
  if (scrolltop > footertotop) {
    $('.scroll-btn').css({'bottom' : difference});
  }else{
    $('.scroll-btn').css({'bottom' : 10});
  };   

  if ($(this).scrollTop() > 200) {
      $('.scroll-btn').fadeIn(200);
  } else {
      $('.scroll-btn').fadeOut(200);
  }
  });
  $('.scroll-btn').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  })
});