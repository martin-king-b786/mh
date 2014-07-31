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
		$(this).find('.subnav').slideToggle('fast');
		$(this).find('.uparr').slideToggle('fast');
	});
    }
	$('.navarr').parent().hover(function() {
		$(this).find('.subnav').slideToggle('fast');
	});
	$('.navarr1').parent().hover(function() {
		$(this).find('.subsubnav').slideToggle('fast');
	});
	$('.navbtn').parent().hover(function() {
		$(this).find('.subnav').slideToggle('fast');
		$(this).find('.uparr').slideToggle('fast');
	});
});