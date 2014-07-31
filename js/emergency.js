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

$(document).ready(emFeatHeight);
$(window).load(emFeatHeight);
$(window).resize(emFeatHeight);
