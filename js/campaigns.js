$(document).ready(function(){
    $browserWidth = $(window).width();
    if($browserWidth > 767) {
        $('.campaign-section .campaign-image').mouseenter(function(){
            $(this).children('.campaign-image-overlay').slideDown();
        });
        $('.campaign-section .campaign-image').mouseleave(function(){
            $(this).children('.campaign-image-overlay').slideUp();
        });
    }
    else {
        $('.campaign-section .campaign-image').click(function(){
            $(this).children('.campaign-image-overlay').slideToggle();
        });
    }
    
            /* Lightbox */
    $('.campaign-section .content .button.video').click(function(){
            $(this).parent().parent().children('.lightbox-container').fadeIn();
    });
    $('.campaign-section .campaign-image .button.video').click(function(){
            $(this).parent().parent().parent().parent().children('.lightbox-container').fadeIn();
    });
    $('.lightbox-container .close-lightbox').click(function(){
            $('.lightbox-container').fadeOut();
    });

    $('.expand-arrow').click(function(){
        $(this).parent().parent().children('.campaign-image').slideToggle();
        
        $(this).toggleClass('expandarrowrotate');
        $(this).parent().children('a.button.readmore').toggleClass('readmoreexp');
    });
});