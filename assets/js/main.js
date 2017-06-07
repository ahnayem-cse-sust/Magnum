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

        /*Smoth transition script*/
     // This is a functions that scrolls to #{blah}link
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

   /* $(window).scroll(function(){
       var scrollTop = $(window).scrollTop();
        if(scrollTop>100){
             $("#nav").addClass("fixed-menu animated fadeInDown");
         }
        else{
            $("#nav").removeClass("fixed-menu animated fadeInDown");
    }
    });*/

    var scrollLast = 100;

    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop();

        
            if(scrollTop>100)
            {
                $("#nav").addClass("fixed-menu animated fadeInDown");
            }
            else
            {
                $("#nav").removeClass("fixed-menu animated fadeInDown");
            }

        
        
    });

    /*Animation scripts*/

    /*$("#menu-click").click(function(event){
            event.preventDefault();
        });*/

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

