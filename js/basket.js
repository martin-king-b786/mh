$(document).ready(function(){
    $('section.checkout h5').click(function(){
        $(this).parent().children('table:not(.finaltable)').slideToggle();
    });
})