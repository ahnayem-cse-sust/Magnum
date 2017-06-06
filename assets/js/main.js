$(document).ready(function(){

	/*Carousel view scripts*/
    $("#slide-show").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        center: true,
        margin: 10,
        nav: true,
        autoHeight: true
    });

    /*Animation scripts*/

    $.each([ 1, 2, 3, 4, 5, 6, 7, 8,9,10,11], function( index, value ) {
      
        var hoverClass = "#blur-animated-" + value;
        var blurClass = "#blur" + value;
        

        $(hoverClass).mouseenter( function () {
            var $this = $(blurClass);
            var effect = 'fadeIn ';

            $this
                .addClass('animated blur-show ' + effect)
                .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $this.removeClass('animated ' + effect);
            });


            if(value == 1){

                var textAnimate = '#details' + value;

                $(textAnimate).addClass("animated slideInLeft").
                on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(textAnimate).removeClass("animated slideInLeft");
                });

            }
            else if(value != 6 || value != 7 || value != 8)
            {

                var textAnimate = '#details' + value;

                $(textAnimate).addClass("animated zoomIn").
                on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(textAnimate).removeClass("animated zoomIn");
                });               
            }

        });

        $(hoverClass).mouseleave( function (){
            $(blurClass).removeClass("blur-show");
        });

    });
});
/*new WOW().init();*/

