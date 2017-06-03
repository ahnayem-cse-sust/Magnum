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
        /*$("#blur").hover().addClass("bounceIn");*/

    $('#blur').on('mouseover', function () {
        var $this = $(this);
        var effect = 'zoomIn ';

        $this
            .addClass('animated ' + effect)
            .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $this.removeClass('animated ' + effect);
        });
    });
});
/*new WOW().init();*/

