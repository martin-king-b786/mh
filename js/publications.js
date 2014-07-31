function pubLayout() {
    $pubCount='';
    $lastPub='';
    $browserWidth = $(window).width();
    $('ul.year').each(function(){
        $pubCount = $(this).children('li').children('.node-publication').length;
        
        if($browserWidth > 767) {
            $leftOffset = '-325px';
            $rightOffset = '-325px';
            $(this).children('li').children('.node-publication').css({
                right : '',
                left : '',
                width : ''
            });
            $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').css({
                right : '',
                left : '-'
            });
            $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').children('img').css({
                transform : ''
            });
            $pubHeight = $(this).children('li').children('.node-publication').height();
            
            $(this).children('li').css({
                'margin-bottom' : ''
            });
        }
        if($browserWidth < 767) {
            
            if($browserWidth < 480) {
                $(this).children('li').children('.node-publication').css({
                    right : 70-$browserWidth,
                    left : 'initial',
                    width :$browserWidth - 70
                });
                $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').css({
                    right : 'initial',
                    left : '-22px'
                });
                $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').children('img').css({
                    transform : 'rotate(180deg)'
                });
                $pubHeight = $(this).children('li').children('.node-publication').height();

                $(this).children('li').css({
                    'margin-bottom' : $pubHeight+20
                });
            }
            else {
                $lastPub = $lastPub.replace(/[^-\d\.]/g, '');
                if(isNaN(parseFloat($lastPub))) {
                    $(this).children('li').children('.node-publication').css({
                        right : 55 - $browserWidth/2,
                        left : 'initial',
                        width :$browserWidth/2 - 70
                    });
                    $(this).children('li').children('.node-publication').children('.arrow-pointer').css({
                        right : '-22px',
                        left : 'initial'
                    });
                    $(this).children('li').children('.node-publication').children('.arrow-pointer').children('img').css({
                        transform : 'rotate(0deg)'
                    });

                    $(this).children('li:nth-of-type(2n+1)').children('.node-publication').css({
                        right : 'initial',
                        left :  40 - $browserWidth/2,
                        width :$browserWidth/2 - 70
                    });
                    $(this).children('li:nth-of-type(2n+2)').children('.node-publication').children('.arrow-pointer').css({
                        right : 'initial',
                        left : '-22px'
                    });
                    $(this).children('li:nth-of-type(2n+2)').children('.node-publication').children('.arrow-pointer').children('img').css({
                        transform : 'rotate(180deg)'
                    });
                    $pubHeight = $(this).children('li').children('.node-publication').height();
                    $(this).children('li').css({
                        'margin-bottom' : $pubHeight+20
                    });
                }
                else {
                    $(this).children('li').children('.node-publication').css({
                        right : 'initial',
                        left :  40 - $browserWidth/2,
                        width :$browserWidth/2 - 70
                    });
                    $(this).children('li').children('.node-publication').children('.arrow-pointer').css({
                        right : 'initial',
                        left : '-22px'
                    });
                    $(this).children('li').children('.node-publication').children('.arrow-pointer').children('img').css({
                        transform : 'rotate(180deg)'
                    });

                    $(this).children('li:nth-of-type(2n+1)').children('.node-publication').css({
                        right : 55 - $browserWidth/2,
                        left : 'initial',
                        width :$browserWidth/2 - 70
                    });
                    $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').css({
                        right : '-22px',
                        left : 'initial'
                    });
                    $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').children('img').css({
                        transform : 'rotate(0deg)'
                    });
                    $pubHeight = $(this).children('li').children('.node-publication').height();
                    $(this).children('li').css({
                        'margin-bottom' : $pubHeight+20
                    });
                }
                $lastPub = $(this).children('li').children('.node-publication').last().css('right');
                
            }
        }
        else {
            if($browserWidth > 1000) {
                $leftOffset = '-435px';
                $rightOffset = '-425px';
            }
            if($lastPub === $rightOffset) {
                
                $(this).children('li').children('.node-publication').css({
                    right : 'initial',
                    left: $leftOffset
                });
                $(this).children('li').children('.node-publication').children('.arrow-pointer').css({
                    right : '-22px',
                    left : 'initial'
                });
                $(this).children('li').children('.node-publication').children('.arrow-pointer').children('img').css({
                    transform : 'rotate(0deg)'
                });

                $(this).children('li:nth-of-type(2n+1)').children('.node-publication').css({
                    right : $rightOffset,
                    left : 'initial'
                });
                $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').css({
                    right : 'initial',
                    left : '-22px'
                });
                $(this).children('li:nth-of-type(2n+1)').children('.node-publication').children('.arrow-pointer').children('img').css({
                    transform : 'rotate(180deg)'
                });
            }
            $lastPub = $(this).children('li').children('.node-publication').last().css('right');
        }
        
        $(this).children('li').children('.node-publication').each(function(){
            console.log($(this).offset().left+' asdasdas');
            if($browserWidth < 480) {
                $(this).children('.arrow-pointer').css({
                    left : '-22px',
                    right : 'initial'
                });
                $(this).children('.arrow-pointer').children('img').css({
                    transform : 'rotate(180deg)'
                });
            }
            else if($(this).offset().left > ($browserWidth/2)) {
                $(this).children('.arrow-pointer').css({
                    left : '-22px',
                    right : 'initial'
                });
                $(this).children('.arrow-pointer').children('img').css({
                    transform : 'rotate(180deg)'
                });
            }
            else {
                $(this).children('.arrow-pointer').css({
                    right : '-22px',
                    left : 'initial'
                });
                $(this).children('.arrow-pointer').children('img').css({
                    transform : 'rotate(0deg)'
                });
            }
            
        })
    });
}

$(document).ready(pubLayout);
$(window).resize(pubLayout);
$(document).ready(function() {
    $('.year-node').mouseenter(function(){
        $(this).addClass('bright');
        $(this).parent().addClass('bright');
        $(this).parent().children().children().addClass('bright');
    });
    
    $('.year').mouseleave(function(){
        $('*').removeClass('bright');
    });
    
    $('.node-publication').mouseenter(function(){
        $(this).addClass('bright');
        $(this).parent().children('.node').addClass('bright');
        $(this).parent().parent().addClass('bright');
        $(this).parent().parent().children('.year-node').children().addClass('bright');
    });
    
    $('.node-publication').mouseleave(function(){
        $('*').removeClass('bright');
    });
    
    $('.node').mouseenter(function(){
        $(this).parent().children().addClass('bright');
        $(this).parent().parent().addClass('bright');
        $(this).parent().parent().children('.year-node').children().addClass('bright');
    });
    
    $('.node').mouseleave(function(){
        $('*').removeClass('bright');
    });
});