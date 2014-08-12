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
        console.log($(this).html()+" "+$(this).innerWidth());
    })
    $ulWidth = $ulWidth + 2;
    $('#subpage-menu>ul').width($ulWidth);
}
$(document).ready(submenuWidth);
$(window).resize(submenuWidth);