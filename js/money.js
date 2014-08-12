$(document).ready(function(){
    $('#donate-sections h3').click(function(){
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
    
});