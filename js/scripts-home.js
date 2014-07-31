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

//	$(function(){
//		$("body").mousewheel(function(event, delta) {
//			this.scrollLeft -= (delta * 30);
//			event.preventDefault();
//		});   
//	});

    $(document).ready(function(){ 
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
                        
                    console.log($browserWidth+' bwidth '+$scrollCurrent+' scrollcurr '+$sectionWidth+' swidth '+$positionSection.left+' positionsect ');

                    if($browserWidth+$scrollCurrent < $sectionWidth+$positionSection.left) {
                        $('body>section').removeClass('scroll');
                        $(this+':first').parent().addClass('scroll').addClass('tagged');
                        console.log($browserWidth+' bwidth '+$scrollCurrent+' scrollcurr '+$sectionWidth+' swidth '+$positionSection.left+' positionsect ');
                    }
                    
                });
            });
            
        });
    });