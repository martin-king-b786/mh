function approachReadMore() {
    $browserWidth = $(window).width();
    $textLimit = 250;
    if($browserWidth <= 767) {
        $('.approach').each(function(){
            $fullText = $(this).children('.content').children('.text').html();
            $classFullText = $(this).children('.content').children('.fulltext').html().length;
            if($classFullText !== 0) {
                
            }
            else {
                $(this).children('.content').children('.fulltext').html($fullText);
            }
            
            $textLength = $(this).children('.content').children('.text').html().length;
            
            if($textLength > $textLimit) {
                $text = $fullText.substring(0,$textLimit)+'...';
                $(this).children('.content').children('.text').html($text);
                
                $button = $(this).children('.content').children('a.button').html();
                if($classFullText !== 0) {

                }
                else {
                    $(this).children('.content').append('<a class="button"><img src="./css/images/arrow_colour.png"/>Read More</a>');
                }
            }
        });
    }
}

function readMoreClick() {
    $fullText = $(this).parent().children('.fulltext').html();
    $(this).parent().children('.text').html($fullText);
    $(this).hide();
}

$(document).on('click', '.approach a.button', readMoreClick);

$(document).ready(approachReadMore);
$(window).resize(approachReadMore);



$(document).ready(function(){
    $timer = 0;
    function easter1() {
        $origSRC = $('#ig2 .ig-section:first-of-type img').children('img').attr('src');
        $imgNo = 0;

        $timer = setInterval(function(){
            $imgNo++;
            if($imgNo === 6) {
                $('#ig2 .ig-section:first-of-type img').attr('src','./css/images-programme/orphan-info2-img1.png');
                $imgNo = 0;
            }
            else {
                $('#ig2 .ig-section:first-of-type img').attr('src','./css/images-programme/easter1img'+$imgNo+'.png');
            }
        }, 500);
        console.log('asdsad');
    }

    function easter1End() {
        clearInterval($timer);
    }
$('#ig2 .ig-section:first-of-type div.info-img-container').mouseenter(easter1);
$('#ig2 .ig-section:first-of-type div.info-img-container').mouseleave(easter1End);
    
    $easterImgSelector = $('#ig2 .ig-section').eq(2).children('.info-img-container').children('img');
    $('#ig2 .ig-section').eq(2).children('.info-img-container').prepend('<div id="night-sky"></div>');
    $origSRC = $easterImgSelector.attr('src');    
    
    function easter2(){
        
        $easterImgSelector.attr('src','./css/images-programme/easter2img1.png');
        
        $newSRC = $easterImgSelector.attr('src');
        
        $newHeight = $easterImgSelector.height();
        $newWidth = $easterImgSelector.width();
        
        
        $easterImgSelector.css({
            width : '100%',
            top : 0,
            bottom : 'auto'
        });
        
        $('#night-sky').css({
            top: 0,
            background: '#292929',
            height : $newHeight,
            width : '100%',
            display: 'none'
        });
        
        $('#night-sky').stop().slideDown();
        
    }
    
    function easter2End(){
        $easterImgSelector.parent().css({
            border: '0'
        });
        $('#night-sky').stop().slideUp();
        
        $easterImgSelector.attr('src', $origSRC);
        console.log($origSRC);
    }
    $easterImgSelector.parent().mouseenter(easter2);
    $easterImgSelector.parent().mouseleave(easter2End);
});