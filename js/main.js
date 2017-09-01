$(document).ready(function(){
 
$(window).on('resize', function() {

    if($(window).width() > 940) {
        $('.js-animation-off').addClass('js-animation-on').removeClass('js-animation-off');
    
    } else if($(window).width() < 940){
        $('.js-animation-on').addClass('js-animation-off').removeClass('js-animation-on');
    }
});
    
$(window).on('resize', function() {

    if($(window).width() < 751) {
        $(".promo-sharpened__iphone").insertBefore(".promo-sharpened__btn");
        $(".promo-location__paralax-holder").insertBefore(".promo-location__btn");


    } else if ($(window).width() > 750){
        $(".promo-sharpened__iphone").appendTo(".promo-sharpened__in");
        $(".promo-location__paralax-holder").appendTo(".promo-location__in");

    };

});

function toggleFullScreen(vid) {

    if(vid.requestFullScreen) {
        vid.requestFullScreen();   
    } else if(vid.webkitRequestFullScreen) { 
        vid.webkitRequestFullScreen();   
    } else if(vid.mozRequestFullScreen) { 
        vid.mozRequestFullScreen();
    }
}

$("#video-start-btn").click(function(){

    $("body").addClass("overflow-hidden");
    $(".pop-up").removeClass("hidden");
    if($(window).width() < 1024) {   
        toggleFullScreen($('video')[0]);
    };   
    $('.video').trigger('play');

});


$("#video-close-btn").click(function(){

    $("body").removeClass("overflow-hidden");
    $(".pop-up").addClass("hidden");
    $('.video').trigger('pause');

});

 $(window).on('resize', function() {
    var video = $('video');

    if($(window).width() < 1024) {
            video.find("source").remove();
            video.append( "<source src='video/movie_mobile.mp4' type='video/mp4'/>");
    } else if($(window).width() > 1024){
            video.find("source").remove();
            video.append( "<source src='video/movie.mp4' type='video/mp4'/>");
    };

});

$(window).resize();
    
});

$("#subscribe-pop-up-open").click(function(){
    $(".subscribe-pop-up").removeClass("hidden");


});
$("#subscribe-pop-up__close-btn").click(function(){
    $(".subscribe-pop-up").addClass("hidden");
});
