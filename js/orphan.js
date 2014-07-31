$(document).ready(function(){
    $browserWidth = $(window).width();
    
    $('.location-dropdown').click(function(){
        $(this).children('ul').slideDown();
    });
    $('.location-dropdown').mouseleave(function(){
        $(this).children('ul').slideUp();
    });
    $('.location-dropdown input').click(function(){
        $(this).parent().toggleClass('highlight');
    });
    
    if($browserWidth <= 1000) {
        $('#message').click(function(){
            $('#explaination').slideToggle();
        });
        $('#search-bar>span').click(function(){
            $('#search-bar form').slideToggle();
        });
    }
});