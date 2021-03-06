function jcarouselResize() {
    $browserWidth = $(window).width();
    $carouselWidth = $('.jcarousel').width();
    
    $('.jcarousel li').each(function(){
        if ($browserWidth < 480) {
            if($carouselWidth > 220) {
                $margins = ($carouselWidth - 220)/2;
                $(this).css({
                    width : '220px',
                    margin : '0 '+ $margins+'px'
                });
            }
            else {
                $(this).css({
                    width : $carouselWidth-10,
                    margin : '0 5px'
                });
            }
        }
        else if($browserWidth < 1000) {
            $(this).css({
                width : ($carouselWidth - 50) / 2,
                'margin-left' : '0',
                'margin-right' : '50px'
            });
            $('.jcarousel ul').css({
                left : 0
            });
        }
        else {
             $(this).css({
                width : ($carouselWidth - 100) / 3
            });
        }
    });
}
$(document).ready(jcarouselResize);
$(window).resize(jcarouselResize);

$browserWidth = $(window).width();

function donateMobile(){
    if($browserWidth <= 767) {
        $html = '<div id="donate-section">' + $('#donate-section').html() + '</div>';
        $('#donate-section').remove();
        $('#country').append($html);
    }
}

$(document).ready(donateMobile);
$(window).resize(donateMobile);