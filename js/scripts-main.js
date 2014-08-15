$(function() {
	$('.matchheight').matchHeight();
});


$('body').ready(function() {
    $browserWidth = $(window).width();
    if($browserWidth < 1080) {
        $('.navarr').parent().click(function() {
		$(this).find('.subnav').slideToggle('fast');
	});
	$('.navarr1').parent().click(function() {
		$(this).find('.subsubnav').slideToggle('fast');
	});
	$('.navbtn').parent().click(function() {
		$(this).find('.subnav').toggleClass('exp');
		$(this).find('.uparr').toggleClass('exp');
	});
    }
    else {
	$('.navarr').parent().hover(function() {
		$(this).find('.subnav').slideToggle(0);
	});
	$('.navarr1').parent().hover(function() {
		$(this).find('.subsubnav').slideToggle('fast');
	});
	$('.navbtn').parent().hover(function() {
		$(this).find('.subnav').toggleClass('exp');
		$(this).find('.uparr').toggleClass('exp');
	});
    }
});

function submenuWidth () {
    $ulWidth = 0;
    $('#subpage-menu>ul>li').each(function(){
        $ulWidth = $(this).innerWidth() + $ulWidth+1;
    });
    $ulWidth = $ulWidth + 2;
    $('#subpage-menu>ul').width($ulWidth);
}
$(window).load(submenuWidth);
$(window).resize(submenuWidth);

$(document).ready(function(){
    $('#donate-sections h3').click(function(){
        $link = $(this).attr('data-donate-section');
        $('#donate-panels>div').each(function(){
            $section = $(this).attr('data-donate-section');
            if($section === $link) {
                $('#donate-panels>div').removeClass('active');
                $(this).addClass('active');
            }
        });
        $('#donate-sections h3').removeClass('active');
        $(this).addClass('active');
    });
    
    
    /* Page Progress */
    $('#programme > section').each(function(){
        $('#page-progress').append('<li></li>');
    });
    
    $('#page-progress li').click(function(){
        $liPos = $(this).index();
        console.log($liPos);
        
        $scrollTop = $('#programme > section').eq($liPos).offset().top-20;
        console.log($scrollTop);
        
        $(window).scrollTop($scrollTop);
    });
    $browserHeight = $(window).height();
    function pageProgScroll() {
        $firstOffset = $('#programme > section').first().offset().top - 40;
        if($(window).scrollTop() >= $firstOffset) {
            $('#page-progress').show();
        }
        else {
            $('#page-progress').hide();
        }
        $lastBottom = $('#programme > section').last().offset().top + $('#programme > section').last().innerHeight()+50;
        if(($(window).scrollTop()+$browserHeight) >= $lastBottom){
            $('#page-progress').hide();
        }
    }
    function pageProgTrigger() {
        $($('#programme > section').get().reverse()).each(function(){
            $offset = $(this).offset().top;
            $sectionNo = $(this).parent().children('section').index($(this));
            if($offset-40 <= $(window).scrollTop()) {
                $('#page-progress li').css({
                    'border-width' : '1px'
                });
                $('#page-progress li').eq($sectionNo).css({
                    'border-width' : '8px'
                });
                
                return false;
            }
            
            console.log($offset);
            console.log($(window).scrollTop());
            console.log($sectionNo);
        });
    }
    $(window).scroll(pageProgScroll);
    $(window).scroll(pageProgTrigger);
    
});



