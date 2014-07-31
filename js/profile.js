function closeLightBox () {
    $(this).parent().parent().css('display','none');
}
function openLightBox () {
    $('.lightbox-container').css('display','block');
}

$(document).on('click', 'img.close-lightbox', closeLightBox);
$(document).on('click', '#create-submit button.submit-button, #donate-section button.submit-button', openLightBox);

function populateLightBox () {
    var amount = $('#donate-section input[type="text"]').val();
    $('#donate-amount-lb').html(amount);
	$('input.donation-amount').val(amount);
	$('input.donation-amount').attr("value",amount);
    var title = $('#main-content h1').html();
    $('#donate-title-lb').html(title);
}

$(document).on('click', '#donate-section button.submit-button', populateLightBox);

function sliderLightbox() {
	var src = $(this).attr('src');
	$('#lightbox-image img').attr('src',src);
	
	$('.lightbox-container-img').css('display','block');
}

function sliderLightbox() {
	var src = $(this).attr('src')
	$('#lightbox-image img').attr('src',src);
	
	$('.lightbox-container-img').css('display','block');
}

$(document).on('click','.slider-image, .slider-image img, #gallery-container img',sliderLightbox);