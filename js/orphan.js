$(document).ready(function(){
    $browserWidth = $(window).width();
    
   
    $('.location-dropdown > span').click(function(){
        $(this).parent().children('ul').slideToggle();
    });
    $('.location-dropdown').mouseleave(function(){
        $(this).children('ul').slideUp();
    });
    $('.location-dropdown input').click(function(e){
        e.stopPropagation();
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