    $(document).ready(function(){
        $browserWidth = $(window).width();
        $mobileSlideNo = 1;
        if($browserWidth < 767) {
            
            $headerHeight = $('aside#sticky').height()+50;
            $('#mobile-next-slide').click(function(){
                
                $maxBanners = $('#banner-slider ul li').length;
                $('#banner-slider ul li').each(function(){
                    $bannerNo = $(this).children('a').attr('data-banner');
                });
                $mobileSlideNo++;
                var data = $('#banner-slider ul li a').eq($mobileSlideNo-1).attr('data-banner');
                var imgURL = "./css/images-home/banner" + data + ".png";
                
                $('#featured').fadeOut('slow', function() {
                        $(this).css({
                            background : 'url(' + imgURL + ')',
                            'background-size' : 'cover'
                        }
                            );
                }).fadeIn('slow');

                $('.banner-text').not('#banner-text-' + data).hide();
                $('#banner-text-' + data).fadeIn('slow');
                if( $mobileSlideNo === $maxBanners) {
                    $('#mobile-next-slide').hide();
                    $('#mobile-previous-slide').show();
                }
                else if($mobileSlideNo === 1){
                    $('#mobile-next-slide').show();
                    $('#mobile-previous-slide').hide();
                }
                else {
                    $('#mobile-next-slide').show();
                    $('#mobile-previous-slide').show();
                }
            });
            
            $('#mobile-previous-slide').click(function(){
                $maxBanners = $('#banner-slider ul li').length;
                $('#banner-slider ul li').each(function(){
                    $bannerNo = $(this).children('a').attr('data-banner');
                });
                $mobileSlideNo--;
                var data = $('#banner-slider ul li a').eq($mobileSlideNo-1).attr('data-banner');
                var imgURL = "./css/images-home/banner" + data + ".png";
                
                $('#featured').fadeOut('slow', function() {
                        $(this).css({
                            background : 'url(' + imgURL + ')',
                            'background-size' : 'cover'
                        });
                }).fadeIn('slow');

                $('.banner-text').not('#banner-text-' + data).hide();
                $('#banner-text-' + data).fadeIn('slow');
                
                if($mobileSlideNo === $maxBanners) {
                    $('#mobile-next-slide').hide();
                    $('#mobile-previous-slide').show();
                }
                else if($mobileSlideNo === 1){
                    $('#mobile-next-slide').show();
                    $('#mobile-previous-slide').hide();
                }
                else {
                    $('#mobile-next-slide').show();
                    $('#mobile-previous-slide').show();
                }
            });
            
        }
        
        $('#nav>img').click(function(){
            $('#nav ul').slideToggle();
        });
        
        $(".pipe").each(function(){
            $(this).next(".inner").css("position","static");       
            $(this).height($(this).parent().height()-$(this).next(".inner").height());                                                 
        });

        $(document).on('click', '.bannerswap',function(e) {
            e.preventDefault();
            var data = $(this).attr('data-banner');

            var imgURL = "./css/images-home/banner" + data + ".png";

            $('#featured').fadeOut('slow', function() {
                    $(this).css('background', 'url(' + imgURL + ')');
            }).fadeIn('slow');

            $('.banner-text').not('#banner-text-' + data).hide();
            $('#banner-text-' + data).fadeIn('slow');
//			$('#featured').css('background', 'url(' + data + ')');
        });
        
        $sectionScroll = false;
            
        $(document).on('click', 'p.cur a', function(){
            $('p.cur a span').removeClass('sel');
            $(this).children().addClass('sel');
        });
        
        $('.close-arrow').click(function(){
            $(this).parent().toggleClass('show');
        });
        $('#slider-mobile a, #slider-mobile a img').click(function(){
            console.log('fdgfdgdfg');
        });
        $('#slider-mobile').height($('#featured').height());
    });
    
    $(window).resize(function(){
        $browserWidth = $(window).width();
        if($browserWidth < 767) {
            $('#slider-mobile').height($('#featured').height());
        }
    });
        
    function sliderDimensions() {
        $browserWidth = $(window).width();
        $asideWidth = 0;
        $('body > aside').each(function(){
            $asideWidth = $(this).width() + $asideWidth;
        });
        if($browserWidth < 1200) {
            if($browserWidth < 1020) {
                if($browserWidth < 800) {

                }
                else {
                    $('#vp-container').width($browserWidth);
                    $overlayWidth = ($browserWidth-800)/2;
                    $('.slider-overlay').width($overlayWidth);
                    $('#viewport').css({
                        'margin-left' : $overlayWidth,
                        'margin-right' : $overlayWidth
                    });
                    $('a#simplePrevious').css('left', $overlayWidth);
                    $('a#simpleNext').css('right', $overlayWidth);
                }
            }
            else {
                $stickyWidth = $('#sticky').width()+2;
                $('#vp-container').width($browserWidth - $stickyWidth);
                $stickyWidth = ($browserWidth-$stickyWidth-800)/2;
                $('.slider-overlay').width($stickyWidth);
                $('#viewport').css({
                    'margin-left' : $stickyWidth,
                    'margin-right' : $stickyWidth
                });
                $('a#simplePrevious').css('left', $stickyWidth);
                $('a#simpleNext').css('right', $stickyWidth);
            }
        }
        else {
            $('#vp-container').width($browserWidth-($asideWidth+2));
            $overlaySize = ($browserWidth-$asideWidth-800)/2;
            $('.slider-overlay').width($overlaySize);
            $('#viewport').css({
                'margin-left' : $overlaySize,
                'margin-right' : $overlaySize
            });
            $('a#simplePrevious').css('left', $overlaySize);
            $('a#simpleNext').css('right', $overlaySize);
        }


    }

    $(document).ready(sliderDimensions);
    $(window).resize(sliderDimensions);

    function homeSlides() {
        $('.jcarousel').on('jcarousel:lastout', 'li', function(event, carousel) {

        });
    }