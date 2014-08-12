function jcarouselResize() {
    $carouselWidth = $('.jcarousel').width();
    $('.jcarousel li').each(function(){
        $(this).css({
            width : ($carouselWidth - 100) / 3 
        });
    });
}
$(document).ready(jcarouselResize);
$(window).resize(jcarouselResize);