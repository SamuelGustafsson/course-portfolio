"use strict";
var sliderTime = 5000;
$(document).ready(function () {

      //  Page navigation buttons
      // $("a[href^='#']").on('click', function () {

      //       var hash = this.hash;

      //       $('html, body').animate({
      //             scrollTop: $(hash).offset().top
      //       }, 1000, function () {

      //             window.location.hash = hash;
      //       });
      //       return false;
      // });

      $('.js-wp-1').waypoint(function (direction) {
            $('.js-wp-1').addClass('animated fadeInDown');
      }, {
                  offset: '80%'
            });
});

// Testimonial Slider

// Testimonial object prototype
function Testimonial(firstname, lastname, testimonial, pictureURL) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = firstname + ' ' + lastname;
      this.testimonial = testimonial;
      this.pictureURL = pictureURL;
}

// Create new testimonials
var olofTest = new Testimonial('Olof', 'Larsson', "Samuel är så jävla skicklig", "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/393268_302560479756766_1174175814_n.jpg?oh=d72b86716234548938641377804daac1&oe=58BDFACA");
var niclasTest = new Testimonial('Niclas', 'Sjöstedt', "Jag har aldrig träffat en kille som är så jävla skicklig på squash", "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/14095885_10155384602429852_7106269000411252661_n.jpg?oh=766a77567c1c716bd800eb3dd7a5b656&oe=58C5B208");
var emelieTest = new Testimonial('Emelie', 'Jacobsson', "Människa med större hjärta kan man inte hitta", "https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/14702283_10154032622206705_3344385999197099248_n.jpg?oh=9b634b246a43c550bf0e71e130cba24c&oe=58B38EE0");

// Creating array to hold testimonials
var testimonialsARR = [];

// Add testimonial objects to testimonialsARR
testimonialsARR.push(olofTest, niclasTest, emelieTest);

function renderTestimonials(testimonialsArray) {

      for (var i = 0; i < testimonialsArray.length; i++) {
            var testimonialNumber = i + 1;
            // Create testimonial html string
            var testimonialHTML = '<div class="testimonial-slider-item hide col-sm-12">';
            testimonialHTML += '<div class="col-md-3 col-xs-12 offset-sm-1">';
            testimonialHTML += '<img src="' + testimonialsArray[i].pictureURL + '" alt="Picture of ' + testimonialsArray[i].fullname + '">';
            testimonialHTML += '</div>';
            testimonialHTML += '<div class="col-sm-8 col-xs-12">';
            testimonialHTML += '<p>' + testimonialsArray[i].testimonial + '</p>';
            testimonialHTML += '</div>';
            testimonialHTML += '</div>';

            // Create slider nav button
            var sliderNavControl = '<a href="" class="current slider-nav-control" >' + testimonialNumber + '</a>';

            // Render testimonial html string to index
            slider.insertAdjacentHTML('beforeend', testimonialHTML);
            sliderNavControlsContainer.insertAdjacentHTML('beforeend', sliderNavControl);
      }
}

var slider = document.getElementById("slider-container");
var sliderItems = document.getElementsByClassName("testimonial-slider-item");
var sliderNavControlsContainer = document.getElementById("testimonials-slider-nav");
var sliderNavButtons = sliderNavControlsContainer.getElementsByTagName("a");
var sliderButtons = document.getElementsByClassName("testmionial-slider-button");
var counter = 0;

function playSlider() {
      console.log(counter + " from playSlider");
      for (var i = 0; i < sliderItems.length; i++) {
            $(sliderItems[i]).hide();
            $(sliderNavButtons[i]).removeClass("current");
      }

      if (counter > sliderItems.length-1) {
            counter = 0;
      }

      $(sliderItems[counter]).fadeIn("slow");
      $(sliderNavButtons[counter]).addClass("current");
      counter++;
}

function changeTestimonial(buttonClicked) {
      // Set current from click event
      counter += buttonClicked;
      console.log(counter + " from changeTestimonial");

      if (counter >= sliderItems.length) {
            counter = 0;
      }
      else if (counter < 0) {
            counter = sliderItems.length-1;
      }

       for (var i = 0; i < sliderItems.length; i++) {
            // If testimonial is not the one ask for, hide it
            if (i != counter) {
                  $(sliderItems[i]).hide();
                  // Change nav control
                  $(sliderNavButtons[i]).removeClass("current");
            }
      }
      // Show testimonial
      $(sliderItems[counter]).fadeIn();
      // Update nav control
      $(sliderNavButtons[counter]).addClass("current");
      counter++;
      // Reset interval
      clearInterval(setInterval(playSlider, sliderTime));
}

// Chane testimonial with arrow buttons 
$(".testmionial-slider-left").on("click", function () {
      var next = -1;
      changeTestimonial(next);
      console.log("left");
      return false;
});

$(".testmionial-slider-right").on("click", function () {
      var next = 1;
      changeTestimonial(next);
      return false;
});

renderTestimonials(testimonialsARR);
setInterval(playSlider, sliderTime);
playSlider();

