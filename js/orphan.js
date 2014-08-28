$(document).ready(function(){
    $browserWidth = $(window).width();
    
   
    if($browserWidth < 767) {
         $('.location-dropdown').click(function(){
            $(this).children('ul').slideToggle();
        });
        $('.location-dropdown input').click(function(e){
            e.stopPropagation();
            $(this).parent().toggleClass('highlight');
        });
    }
    else {
        $('.location-dropdown').mouseenter(function(){
            $(this).children('ul').slideDown();
        });
        $('.location-dropdown').mouseleave(function(){
            $(this).children('ul').slideUp();
        });
        $('.location-dropdown input').click(function(){
            $(this).parent().toggleClass('highlight');
        });
    }
    
    
    if($browserWidth <= 1000) {
        $('#message').click(function(){
            $('#explaination').slideToggle();
        });
        $('#search-bar>span').click(function(){
            $('#search-bar form').slideToggle();
        });
    }
});