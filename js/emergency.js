$(document).ready(function(){
    $('.emergency-section .mobile-title').click(function(){
        $(this).parent().children('.mobile-container').slideToggle();
        $(this).children('img').toggleClass('rotate').toggleClass('active');
        if($(this).children('img').hasClass('active')){
            console.log('fdgdf');
            $(this).children('img').attr('src','./css/images/arrow_hollow.png');
        }
        else {
            $(this).children('img').attr('src','./css/images/arrow_colour.png');
        }
        
        
    });
    
    $('.emergency-section .content .appeal').click(function(){
            console.log('sgdgfd');
            $(this).parent().parent().parent().children('.lightbox-container').fadeIn();
    });
    
    $('.lightbox-container .close-lightbox').click(function(){
            $('.lightbox-container').fadeOut();
    });

});

