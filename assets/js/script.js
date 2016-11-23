$(document).ready(function () {
   //  Page navigation buttons
   $("a[href^='#']").on('click', function (e) {

      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 1000, function () {

         window.location.hash = hash;
      });
   });

   $('.js-wp-1').waypoint(function (direction) {
      $('.js-wp-1').addClass('animated fadeInDown');
   }, {
         offset: '80%'
      });
});

