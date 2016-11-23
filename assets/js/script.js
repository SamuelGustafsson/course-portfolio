$(document).ready(function () {

   //    // Scroll to about
   //  $("#cover-caption a").click(function() {
   //     $('html, body').animate({
   //         scrollTop: $("#about")});

   //    // Scroll to top
   //    $("a[href='#cover']").click(function () {
   //       $("html, body").animate({ scrollTop: 0 }, "slow");
   //       return false;
   //    });

   //Go to top
   $("a[href^='#cover-section']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
      }, 1000);
   });

  $("a[href^='#about']").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
      }, 1000);
   });


});