$browserWidth = $(window).width();

function emFeatHeight () {
    $('.emergency-section.featured').each(function(){
        $imgh = $(this).children('.image-container').children('img').height();
        $(this).height($imgh); 
        if($browserWidth <= 767) {
            $(this).height('');
        }
    }); 
    
}

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
});
$(document).ready(emFeatHeight);
$(window).load(emFeatHeight);
$(window).resize(emFeatHeight);
