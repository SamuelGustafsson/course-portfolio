$(document).ready(function () {


   //    //Go to top
   //    $("a[href^='#cover-section']").on("click", function (e) {
   //       e.preventDefault();
   //       $("html, body").animate({
   //          scrollTop: $($(this).attr("href")).offset().top
   //       }, 1000);
   //    });

   //   $("a[href^='#about']").on("click", function (e) {
   //       e.preventDefault();
   //       $("html, body").animate({
   //          scrollTop: $($(this).attr("href")).offset().top
   //       }, 1000);
   //    });

   $("a[href^='#']").on('click', function (e) {

      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 1000, function () {

         window.location.hash = hash;
      });

   });
});