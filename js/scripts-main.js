$browserWidth = $(window).width();
$(function() {
	$('.matchheight').matchHeight();
});


$('body').ready(function() {
    $browserWidth = $(window).width();
    if($browserWidth < 1080) {
        
        $('.navarr').parent().click(function(e) {
                e.preventDefault();
		$(this).find('.subnav').slideToggle('fast');
	});
	$('.navarr1').parent().click(function(e) {
                e.preventDefault();
		/*$(this).find('.subsubnav').slideToggle('fast');*/
	});
	$('.navbtn').parent().click(function() {
                if($(this).find('.subnav').hasClass('exp')) {
                    $('.subnav').removeClass('exp');
                }
                else {
                    $('.subnav').removeClass('exp');
                    $(this).find('.subnav').toggleClass('exp');
                    $(this).find('.uparr').toggleClass('exp');
                }
                $('#mobilenav li').removeClass('exp');
                $('#mobilenav ul').removeClass('exp');
	});
        /*$('body').not('#limnav').click(function(){
            $('#limnav ul').hide();
            console.log('asdasdsa');
        });*/
        $('#mobilenav li ').click(function(e){
            e.stopPropagation();
            if($(this).hasClass('exp')) {
                console.log('sdfsdf');
                $(this).parent().children('li').removeClass('exp');
                $(this).parent().children('li').children('ul').removeClass('exp');
            }
            else {
                $(this).parent().children('li').removeClass('exp');
                $(this).parent().children('li').children('ul').removeClass('exp');
                $(this).children('ul').toggleClass('exp');
                $(this).toggleClass('exp');
            }
        });
        $pageTitle = $('h1').html();
        $('#mobilenav li').each(function(){
            $html = $(this).text();
            $menuItem = $html.substr(0,$(this).text().length - $(this).children('ul').text().length);
            if($menuItem === $pageTitle) {
                $(this).addClass('exp');
                $(this).parent().parent().addClass('exp');
                $(this).parent().parent().parent().parent().addClass('exp');
            }
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
    $browserWidth = $(window).width();
    $ulWidth = 0;
    $('#subpage-menu>ul>li').each(function(){
        $ulWidth = $(this).innerWidth() + $ulWidth+1;
    });
    $ulWidth = $ulWidth + 2;
    if($ulWidth > $browserWidth) {
        
    }
    else {
        $('#subpage-menu>ul').width($ulWidth);
    }
}

$(window).load(submenuWidth);
$(window).resize(submenuWidth);

function subMenuMobile() {
    if($browserWidth <= 767) {
        
    }    
}

$(window).load(subMenuMobile);
$(window).resize(subMenuMobile);

$(document).ready(function(){
    $(document).on('click','#donate-sections h3',function(){
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
        $('#page-progress').append('<li><div></div></li>');
    });
    
    $('#page-progress li').click(function(){
        $liPos = $(this).index();
        
        $scrollTop = $('#programme > section').eq($liPos).offset().top-20;
        
        $(window).scrollTop($scrollTop);
    });
    $browserHeight = $(window).height();
    function pageProgScroll() {
        $firstOffset = $('#programme > section').first().offset().top - 40;
        if($(window).scrollTop() >= $firstOffset && $browserWidth > 480) {
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
            
            $liColour = $('#page-progress li').css('border-color');
            $windowScroll = $(window).scrollTop();
            $sectionHeight = $(this).height();
            $sectionPerc = 100/$sectionHeight;
            $sectionOpacity = (100 - Math.abs($sectionPerc * ($windowScroll - $offset)))/100;
                        
            $('#page-progress li div').eq($sectionNo).css({
                background : $liColour,
                width: '100%',
                height: '100%',
                'border-radius' : '50%',
                opacity : $sectionOpacity
            });
            
        });
    }
    
    $(window).scroll(pageProgScroll);
    $(window).scroll(pageProgTrigger);
    $('#page-progress').hide();
});

function donateSection() {
    $browserWidth = $(window).width();
    if($browserWidth > 1000) {
        $mainHeight = 0;
        $tHeight = 0;
        $('#donate-sections h3').each(function(){
            $tHeight = $(this).innerHeight()+$tHeight;
        });
        $('#donate-panels > div').each(function(){
            $height = $(this).height();
            if($height > $tHeight) {
                $mainHeight = $height;
            }
            else {
                $mainHeight = $tHeight;
            }
        });
        $('#donate-section > div').height($mainHeight);
    }
    else {
        $('#donate-sections').height('65px');
        $('#donate-panels').height('');
    }
    
}


$(window).load(donateSection);
$(window).resize(donateSection);

$(document).ready(function(){
    $('.expand-arrow:not(#lastexparrow)').click(function(){
        if($(this).parent().attr('class') === 'content') {
            
        }
        else {
            $(this).parent().parent().children('.content').slideToggle();

            $(this).toggleClass('expandarrowrotate');
        }
        console.log(1234);
    }); 
});

function contentReadMore() {
    $browserWidth = $(window).width();
    $textLimit = 250;
    if($browserWidth <= 767) {
        $('.content-rm').each(function(){
            $fullText = $(this).children('.content').children('.text').html();
            $classFullText = $(this).children('.content').children('.fulltext').html().length;
            if($classFullText !== 0) {
                
            }
            else {
                $(this).children('.content').children('.fulltext').html($fullText);
            }
            
            $textLength = $(this).children('.content').children('.text').html().length;
            
            if($textLength > $textLimit) {
                $text = $fullText.substring(0,$textLimit)+'...';
                $(this).children('.content').children('.text').html($text);
                
                $button = $(this).children('.content').children('a.button').html();
                if($classFullText !== 0) {

                }
                else {
                    $(this).children('.content').append('<a class="button"><img src="./css/images/arrow_colour.png"/>Read More</a>');
                }
            }
        });
    }
}

function readMoreClick() {
    $fullText = $(this).parent().children('.fulltext').html();
    $(this).parent().children('.text').html($fullText);
    $(this).hide();
}

$(document).on('click', '.content-rm a.button', readMoreClick);

$(document).ready(contentReadMore);
$(window).resize(contentReadMore);

