$(document).ready(function(){
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
    $('.currency').click(function(){
        $('.currency').removeClass('highlight');
        $(this).toggleClass('highlight');
    });
    $('span.drop-down').click(function(){
        $('#search-form').slideToggle();
    });
    
    $('.checkboxes span').click(function(){
        $(this).parent('label').parent().parent().children('.other-option').children('input.other-amount').attr('disabled','disabled');
    });
    
    $('.other-option span.other').click(function(){
        $(this).parent().parent().children('input.other-amount').removeAttr('disabled');
    });
});
