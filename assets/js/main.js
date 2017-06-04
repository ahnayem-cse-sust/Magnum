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

/*    $(".project-a-11").mouseenter( function () {
        var $this = $("#blur11");
        var effect = 'zoomIn ';

        $this
            .addClass('animated blur-show ' + effect)
            .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $this.removeClass('animated ' + effect);
        });
    });

    $(".project-a-11").mouseleave( function (){
        $("#blur11").removeClass("blur-show");
    });*/

/*    for(i=1;i<=11;i++){
        var hoverClass = "#blur-animated-" + i;
        var blurClass = "#blur" + i;
        

        $(hoverClass).mouseenter( function () {
            var $this = $(blurClass);
            var effect = 'zoomIn ';

            $this
                .addClass('animated blur-show ' + effect)
                .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $this.removeClass('animated ' + effect);
            });
        });

        $(hoverClass).mouseleave( function (){
            $(blurClass).removeClass("blur-show");
        });
    }*/

    $.each([ 1, 2, 3, 4, 5, 6, 7, 8,9,10,11], function( index, value ) {
      
        var hoverClass = "#blur-animated-" + value;
        var blurClass = "#blur" + value;
        

        $(hoverClass).mouseenter( function () {
            var $this = $(blurClass);
            var effect = 'zoomIn ';

            $this
                .addClass('animated blur-show ' + effect)
                .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $this.removeClass('animated ' + effect);
            });
        });

        $(hoverClass).mouseleave( function (){
            $(blurClass).removeClass("blur-show");
        });

    });
});
/*new WOW().init();*/

