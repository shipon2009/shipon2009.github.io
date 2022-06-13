(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".slide-area").owlCarousel({
            items:1,
            margin:0,
            loop:true,
            nav:true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            dots:true,
            autoplay:true,
        //    responsive:{
        //        0:{
        //            stagePadding:0,
        //        },
        //        600:{
        //            stagePadding:100,
        //        },
        //        1320:{
        //            stagePadding:150,
        //        },
        //    }
        });

        $(".logo-carousel").owlCarousel({
            center:true,
            margin:10,
            loop:true,
            nav:true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            dots:false,
            autoplay:true,
			autoplayHoverPause: true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:true,
                }
            }

        });

        $(".testimonial-slider").owlCarousel({
            loop:true,
            margin:5,
            nav:false,
            dots:true,
            items:1,
            autoplay:true,
            animateIn:'zoomIn',
            autoplayHoverPause: true,
        });

        $('.pro-gal-area').magnificPopup({
            delegate: 'a',
            type:'image',
            gallery:{enabled:true},

        });

    // Sticky_header js start
    $(window).scroll(function() 
        {
        if ($(this).scrollTop() > 10)
        {
        $('.header').addClass("sticky_header");
        }
        else
        {
        $('.header').removeClass("sticky_header");
        }
        });

    });

}(jQuery));

    // Facebook Chat Button script
    var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "102606781581158");
        chatbox.setAttribute("attribution", "biz_inbox");
        window.fbAsyncInit = function() {
        FB.init({
            xfbml            : true,
            version          : 'v10.0'
        });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    
        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }
        
        window.onscroll = () =>{
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        };


    //Get the button Scroll Top:
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    
    //Lazy Load Function for image
    document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages = document.querySelectorAll("img.lazy");
        var lazyloadThrottleTimeout;

        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }

          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                  }
              });
              if(lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      });
