$(document).ready(function(){
    $('.story .img-container img').click(function(){
        $('.story .img-container img').css({
            opacity : 0.5
        });
        $(this).css({
            opacity : 1
        });
        $storyLink = $(this).parent().parent().children('a').attr('href');
        $afdsf = $(this).parent().parent().parent().parent().children('.button').attr('href',$storyLink);
        console.log($afdsf);
    });
    
    $(document).ready(function(){
        $(".tooltip-examples a").tooltip();   
    });
});
