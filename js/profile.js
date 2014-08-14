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
	var src = $(this).attr('src');
	$('#lightbox-image img').attr('src',src);
	
	$('.lightbox-container-img').css('display','block');
}

function lightboxArrowNext() {
    $sliderCount = 0;
    $lightboxSrc = $('#lightbox-image img').attr('src');
    
    $('#gallery-container img').each(function(){
        $sliderCount++;
        $sliderImgSrc = $(this).attr('src');
        if($sliderImgSrc === $lightboxSrc) {
            $gallImg = $('#gallery-container img').length;
            if($sliderCount === $gallImg) {
                $nextSrc = $('#gallery-container img').first().attr('src');
                $('#lightbox-image img').attr('src',$nextSrc);
            }
            else {
                $nextSrc = $('#gallery-container img').eq($sliderCount).attr('src');
                $('#lightbox-image img').attr('src',$nextSrc);
            }
        }
    });
}

function lightboxArrowPrevious() {
    $sliderCount = 0;
    $lightboxSrc = $('#lightbox-image img').attr('src');
    
    $('#gallery-container img').each(function(){
        $sliderImgSrc = $(this).attr('src');
        if($sliderImgSrc === $lightboxSrc) {
            if($sliderCount === 0) {
                $prevSrc = $('#gallery-container img').last().attr('src');
                $('#lightbox-image img').attr('src',$prevSrc);
            }
            else {
                $prevSrc = $('#gallery-container img').eq($sliderCount-1).attr('src');
                $('#lightbox-image img').attr('src',$prevSrc);
            }
        }
        $sliderCount++;
    });
}
$(document).on('click','.slider-image, .slider-image img, #gallery-container img',sliderLightbox);
$(document).on('click','.lb-next',lightboxArrowNext);
$(document).on('click','.lb-prev',lightboxArrowPrevious);