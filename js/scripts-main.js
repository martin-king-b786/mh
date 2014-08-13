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
        console.log($(this).html()+" "+($(this).innerWidth()));
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
    
});