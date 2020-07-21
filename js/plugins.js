/*============================================================
CUSTOMIZABLE JQUERY FEATURES & PLUGINS
=============================================================*/

/*========== WAYPOINTS JQUERY CIRCLE PROGRESS (DON'T CHANGE)==========*/
$(document).ready(function () {
   var el = $('#circle-1').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-2').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-3').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-4').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-5').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-6').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-7').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});

$(document).ready(function () {
   var el = $('#circle-8').circleProgress({ value: 0 });

   new Waypoint({
      element: el.get(0),
      handler: function () {
         el.circleProgress({
            value: el.data('value')
         });
         this.destroy();
      },
      offset: '70%'
   });
});


/*========== CUSTOMIZABLE JQUERY CIRCLE PROGRESS SETTINGS ==========*/
$(document).ready(function () {

   /*-- Main Settings --*/
   $('.circle').circleProgress({
      size: 120,
      thickness: 7,
      fill: "#E9666A",
      emptyFill: "#DDD",
      animation: {
         duration: 3900,
         easing: 'circleProgressEasing'
      }
   });

   /*-- Individual Settings (Percent Progress Count) --*/
   $('#circle-1').circleProgress({
      value: 0.98
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(98 * progress) + '<i>%</i>');
   });

   $('#circle-2').circleProgress({
      value: 0.85
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
   });

   $('#circle-3').circleProgress({
      value: 0.9
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
   });

   $('#circle-4').circleProgress({
      value: 0.95
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
   });

   $('#circle-5').circleProgress({
      value: 0.65
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(65 * progress) + '<i>%</i>');
   });

   $('#circle-6').circleProgress({
      value: 0.75
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
   });

   $('#circle-7').circleProgress({
      value: 0.8
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
   });

   $('#circle-8').circleProgress({
      value: 0.48
   }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(48 * progress) + '<i>%</i>');
   });

});

/*========== SMOOTH SCROLLING TO LINKS ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('#mainNav .navbar-toggler').addClass('collapsed');
   $('#navbarResponsive').removeClass('show');

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
});


/*========== PORTFOLIO GALLERY NAVBAR COLLAPSE
(so main nav and portfolio nav don't ipen and close at the same time.) ==========*/
$(document).ready(function () {
 $('#navbarProjects .nav-link').on('click', function () {
   $('.navbar-collapse.collapse').removeClass('show');
 });
});


/*========== PORTFOLIO FILTER (ISOTOPE) INITIALIZATION ==========*/
var $grid = $('.grid').isotope({
 filter: '.web-design',
 itemSelector: '.element-item',
 layoutMode: 'fitRows'
});


/*========== REFERENCES CAROUSEL ==========*/
$(document).ready(function () {
 $('#references-carousel .carousel-wrap .owl-carousel').owlCarousel({
   autoplay: true,
   autoplayHoverPause: true,
   loop: true,
   autoplayTimeout: 8000,
   autoplaySpeed: 2000,
   nav: true,
   navText: [
     "<i class='fas fa-chevron-left'></i>",
     "<i class='fas fa-chevron-right'></i>"
   ],
   navSpeed: 1500,
   responsive: {
     0: {
       items: 1
     }
   }
 });
});


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
 $(window).scroll(function () {
   if ($(this).scrollTop() > 500) {
     $('.top-scroll').fadeIn();
   } else {
     $('.top-scroll').fadeOut();
   }
 });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
 if ($(window).width() < 768) {
   $("div").attr('data-animation', 'animate__animated animate__fadeInUp');
 }
});


/*============================================================
PLUGINS & CUSTOMIZATIONS THAT SHOULD NOT BE CHANGED BELOW
=============================================================*/


/*========== WAYPOINTS ANIMATION DELAY ==========*/
$(function () { // a self calling function
   function onScrollInit(items, trigger) { // a custom made function
      items.each(function () { //for every element in items run function
         var osElement = $(this), //set osElement to the current
            osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
            osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

         osElement.css({ //change css of element
            '-webkit-animation-delay': osAnimationDelay, //for safari browsers
            '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
            'animation-delay': osAnimationDelay //normal
         });

         var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

         osTrigger.waypoint(function () { //scroll upwards and downwards
            osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
         }, {
               triggerOnce: true, //only once this animation should happen
               offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
      });
   }

   onScrollInit($('.os-animation')); //function call with only items
   onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== CONTACT FORM INPUT VALIDATION ==========*/
$(function () {

   // init the validator
   // validator files are included in the download package
   // otherwise download from http://1000hz.github.io/bootstrap-validator

   $('#contact-form').validator();


   // when the form is submitted
   $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
         var url = "contact/gmail-contact.php";

         // POST values in the background the the script URL
         $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
               // data = JSON object that contact.php returns

               // we recieve the type of the message: success x danger and apply it to the
               var messageAlert = 'alert-' + data.type;
               var messageText = data.message;

               // let's compose Bootstrap alert box HTML
               var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

               // If we have messageAlert and messageText
               if (messageAlert && messageText) {
                  // inject the alert to .messages div in our form
                  $('#contact-form').find('.messages').html(alertBox);
                  // empty the form
                  $('#contact-form')[0].reset();
               }
            }
         });
         return false;
      }
   })
});


/*========== ISOTOPE FILTER PROJECT GALLERY ==========*/
// filter functions
var filterFns = {
   // show if number is greater than 50
   numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
   },
   // show if name ends with -ium
   ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
   }
};
// bind filter button click
$('.filters-button-group').on('click', 'a.filter', function () {
   var filterValue = $(this).attr('data-filter');
   // use filterFn if matches value
   filterValue = filterFns[filterValue] || filterValue;
   $grid.isotope({ filter: filterValue });
});
// change is-checked class on menu
$('.button-group').each(function (i, buttonGroup) {
   var $buttonGroup = $(buttonGroup);
   $buttonGroup.on('click', 'a.filter', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
   });
});


/*========== ISOTOPE GALLERY SPACING FIX ==========*/
$(document).ready(function () {
   $container.imagesLoaded(function () {
   $container.isotope({
       itemSelector: ".item",
       isOriginLeft: false,
   });
   $container.isotope();
   });
});


/*========== MAGNIFIC POPUP LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
   $('.img-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true },
      removalDelay: 100, // Delay in milliseconds before popup is removed
      image: {
         titleSrc: 'title'
         // this tells the script which attribute has your image caption
      }
   });
});


/*========== MAGNIFIC POPUP HTML5 VIDEO GALLERY ==========*/
$(document).ready(function () {
   $('.magnificPop-video').magnificPopup({
      type: 'iframe',
      gallery: { enabled: true },
      removalDelay: 100, // Delay in milliseconds before popup is removed
      image: {
         titleSrc: 'title'
         // this tells the script which attribute has your image caption
      },
      iframe: extendMagnificIframe()
   });
});


/*========== EMBED YOUTUBE & VIDEO IN MAGNIFIC POPUP LIGHTBOX ==========*/
function extendMagnificIframe() {
   var $start = 0;
   var $iframe = {
      markup: '<div class="mfp-iframe-scaler">' +
         '<div class="mfp-close"></div>' +
         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
         '</div>' +
         '<div class="mfp-bottom-bar">' +
         '<div class="mfp-title"></div>' +
         '</div>',
      patterns: {
         youtube: {
            index: 'youtu',
            id: function (url) {
               var m = url.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
               if (!m || !m[1]) return null;

               if (url.indexOf('t=') != -1) {
                  var $split = url.split('t=');
                  var hms = $split[1].replace('h', ':').replace('m', ':').replace('s', '');
                  var a = hms.split(':');

                  if (a.length == 1) {
                     $start = a[0];
                  } else if (a.length == 2) {
                     $start = (+a[0]) * 60 + (+a[1]);
                  } else if (a.length == 3) {
                     $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
                  }
               }

               var suffix = '?autoplay=1';
               if ($start > 0) {
                  suffix = '?start=' + $start + '&autoplay=1';
               }

               return m[1] + suffix;
            },
            src: '//www.youtube.com/embed/%id%'
         },
         vimeo: {
            index: 'vimeo.com/',
            id: function (url) {
               var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
               if (!m || !m[5]) return null;
               return m[5];
            },
            src: '//player.vimeo.com/video/%id%?autoplay=1'
         }
      }
   };
   return $iframe;
}
