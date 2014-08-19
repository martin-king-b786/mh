$(window).load(function(){
    $maxHeight = 0;
    $('.infographic .info-img-container').each(function(){
        if($(this).children('img').height() > $maxHeight) {
            $(this).height($(this).children('img').height());
            $maxHeight =$(this).children('img').height();
        }
        else {
            $(this).height($maxHeight);
        }
    });
});