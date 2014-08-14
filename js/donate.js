$(document).ready(function(){
    $('.location-dropdown').click(function(){
        $(this).children('ul').slideDown();
    });
    $('.location-dropdown').mouseleave(function(){
        $(this).children('ul').slideUp();
    });
    $('.location-dropdown input').click(function(){
        $(this).parent().toggleClass('highlight');
    });
    $('.currency').click(function(){
        $(this).toggleClass('highlight');
    });
    $('span.drop-down').click(function(){
        $('#search-form').slideToggle();
    });
    
    $('.checkboxes span').click(function(){
        $(this).parent('label').parent().parent().children('.other-option').children('input.other-amount').attr('disabled','disabled');
        console.log('asdasd');
    });
    
    $('.other-option span.other').click(function(){
        $(this).parent().parent().children('input.other-amount').removeAttr('disabled');
    });
});
