$(document).ready(function(){
	/*Carousel view scripts*/
    $("#slide-show").owlCarousel({
        items: 1,
        loop:true,
        autoplay: false,
        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
        center: true,
        margin: 10,
        nav: true,
        autoHeight: true
    });
});