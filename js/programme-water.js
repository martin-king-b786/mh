$(document).ready(function(){
    $('#lastexparrow').click(function(){
        $this = $(this).parent().parent().children('.content');
        $('#effects').parent().slideToggle(function(){
            console.log($this.attr('class'));
            $this.slideToggle();
        });
        $(this).toggleClass('expandarrowrotate');
    });
});

function infographicResizing() {
    $maxHeight = 0;
    $('#effects .effect-img-container').each(function(){
        if($(this).children('img').height() > $maxHeight) {
            $(this).height($(this).children('img').height());
            $maxHeight = $(this).children('img').height();
        }
        else {
            $(this).height($maxHeight);
        }
        console.log('fdgdfg');
    });
}

$(window).load(infographicResizing);
$(window).resize(infographicResizing);