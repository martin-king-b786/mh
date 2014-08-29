	

//	$(function(){
//		$("body").mousewheel(function(event, delta) {
//			this.scrollLeft -= (delta * 30);
//			event.preventDefault();
//		});   
//	});

    $(document).ready(function(){
        
        $browserWidth = $(window).width();
        $mobileSlideNo = 1;
        if($browserWidth < 767) {
            $headerHeight = $('aside#sticky').height()+50;
            $('section#featured').css('margin-top',$headerHeight);
            $('#mobile-next-slide').click(function(){
                $maxBanners = $('#banner-slider ul li').length;
                $('#banner-slider ul li').each(function(){
                    $bannerNo = $(this).children('a').attr('data-banner');
                });
                $mobileSlideNo++;
                var data = $('#banner-slider ul li a').eq($mobileSlideNo-1).attr('data-banner');
                var imgURL = "./css/images-home/banner" + data + ".png";
                
                $('#featured').fadeTo('slow', 0.3, function() {
                        $(this).css({
                            background : 'url(' + imgURL + ')',
                            'background-size' : 'cover'
                        }
                            );
                }).fadeTo('slow', 1);

                $('.banner-text').not('#banner-text-' + data).hide();
                $('#banner-text-' + data).fadeTo('slow', 1);
                console.log($mobileSlideNo);
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
                
                $('#featured').fadeTo('slow', 0.3, function() {
                        $(this).css({
                            background : 'url(' + imgURL + ')',
                            'background-size' : 'cover'
                        });
                }).fadeTo('slow', 1);

                $('.banner-text').not('#banner-text-' + data).hide();
                $('#banner-text-' + data).fadeTo('slow', 1);
                
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
        $('.next-arrow').click(function(){
            $browserWidth = $(window).width();
            $scrollCurrent = $(window).scrollLeft();
            $('body>section').each(function(){
                $sectionWidth = 0;
                $positionSection = 0;
                
                $(this).children('section:first').firstSection();
                
                $(this).children('section').each(function(){
                    
                    $sectionWidth = $sectionWidth + $(this).width();
                        

                    if($browserWidth+$scrollCurrent < $sectionWidth+$positionSection.left) {
                        $('body>section').removeClass('scroll');
                        $(this+':first').parent().addClass('scroll').addClass('tagged');
                        console.log($browserWidth+' bwidth '+$scrollCurrent+' scrollcurr '+$sectionWidth+' swidth '+$positionSection.left+' positionsect ');
                    }
                    
                });
            });
            
        });
    });
    
    $(function(){
        
		$(".pipe").each(function(){
			$(this).next(".inner").css("position","static");       
			$(this).height($(this).parent().height()-$(this).next(".inner").height());                                                 
		});

		$( ".bannerswap" ).click(function(e) {
			e.preventDefault();
			var data = $(this).data('banner');
			var imgURL = "./css/images-home/banner" + data + ".png";

			$('#featured').fadeTo('slow', 0.3, function() {
				$(this).css('background', 'url(' + imgURL + ')');
			}).fadeTo('slow', 1);

			$('.banner-text').not('#banner-text-' + data).hide();
			$('#banner-text-' + data).fadeTo('slow', 1);

//			$('#featured').css('background', 'url(' + data + ')');
		});
                
	});
        $(document).ready(function(){
            $sectionScroll = false;
            function nextSection() {
                if($browserWidth > 767) {
                    $userScroll = $(window).scrollLeft()+ $browserWidth;
                        $('body > section').each(function(){
                            $offsetStart = $(this).children().first().position().left;
                            $offsetEnd = $(this).children().last().position().left + $(this).children().last().width();
                            $scrollleft = $(window).scrollLeft();
                            if($offsetStart > $scrollleft + $('aside#sticky').width()) {
                                $sectionScroll = true;
                                $('html, body').animate({scrollLeft: ($offsetStart-$('aside#sticky').width() ) }, 400);
                                $('body > section').animate({
                                    opacity : 0.25
                                }, 400);
                                $(this).animate({
                                    opacity : 1
                                }, 400, function(){
                                    $sectionScroll = false;
                                });
                                return false;
                            }
                            
                        });
                    
                }
            }
            
            function prevSection() {
                if($browserWidth > 767) {
                    $userScroll = $(window).scrollLeft();
                    $($('body > section').get().reverse()).each(function(){
                        $offsetStart = $(this).children().first().position().left;
                        $offsetEnd = $(this).children().last().position().left + $(this).children().last().width();
                        $scrollleft = $(window).scrollLeft();

                        if($offsetStart < $userScroll) {
                            $sectionScroll = true;
                            $('html, body').animate({scrollLeft: ($offsetStart-$('aside#sticky').width() ) }, 400);
                            $('body > section').animate({
                                opacity : 0.5
                            }, 400);
                            $(this).animate({
                                opacity : 1
                            }, 400, function(){
                                    $sectionScroll = false;
                                });
                            return false;
                        }

                    });
                    
                }
            }
            
            function scrollSection() {
                console.log($sectionScroll);
                if($browserWidth > 767) {
                    if($sectionScroll === false) {
                        $('body > section').css({
                            opacity : 1
                        });
                    }
                }
                            
            }

            $('.section-next').click(nextSection);
            $('.section-prev').click(prevSection);
            $(window).scroll(scrollSection);
            
            $('p.cur a').click(function(){
                $('p.cur a span').removeClass('sel');
                $(this).children().addClass('sel');
            });
        });
        