(function ($) {
    "use strict";

    $(window).on('load', function(){
        // ------- Prealoder ------
        $("#preloader").delay(300).fadeOut("slow");
    });

    $(document).ready(function () {



        
        

        // ------------- back to top --------------

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });




        // ------------- Hamburger menu --------------

        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });



        // marquee
        $('.marquee').marquee({
            duration: 9000,
            duplicated: true,
        });



        
    });

})(jQuery);