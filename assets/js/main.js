(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".slide-area").owlCarousel({
            
            items:1,
            margin:10,
            loop:true,
            nav:true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            dots:true,
            autoplay:false,
        //    autoplayTimeout: 3500,
        //    autoplaySpeed: 800,
            
        //    animateIn:'slideInLeft',

        });

        $(".logo-carousel").owlCarousel({
            margin:10,
            loop:true,
            nav:true,
            navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            dots:false,
            autoplay:true,
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

        // $(".pro-gal-area").masonry({
        //     itemSelector: '.product-img',
        //     columnWidth: 200
        // })


    });
    
    // jQuery(window).load(function(){

               
    // });


    

}(jQuery));	
