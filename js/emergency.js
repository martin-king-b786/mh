$(document).ready(function(){
    $('.emergency-section .mobile-title').click(function(){
        $(this).parent().children('.mobile-container').slideToggle();
        $(this).children('img').toggleClass('rotate').toggleClass('active');
        if($(this).children('img').hasClass('active')){
            $(this).children('img').attr('src','./css/images/arrow_hollow.png');
        }
        else {
            $(this).children('img').attr('src','./css/images/arrow_colour.png');
        }
        
    });
    
    $browserWidth = $(window).width();
    if($browserWidth > 767) {
        $('#emergency .image-container').mouseenter(function(){
            $(this).children('.emergency-image-overlay').slideDown();
        });
        $('#emergency .image-container').mouseleave(function(){
            $(this).children('.emergency-image-overlay').slideUp();
        });
    }
    else {
        $('#emergency .image-container').click(function(){
            $(this).children('.emergency-image-overlay').slideToggle();
        });
    }
    
    $('.buttons .video').click(function(){
            $(this).parent().parent().parent().parent().children('.lightbox-container').fadeIn();
    });
    
    $('.lightbox-container .close-lightbox').click(function(){
            $('.lightbox-container').fadeOut();
    });

});

