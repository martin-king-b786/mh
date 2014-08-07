$(document).ready(function(){
    $browserWidth = $(window).width();
    $trno = $('th').length;
    
    
    if($browserWidth < 767) {
        $('.table-container').each(function(){
            $title = $(this).children('.title-container').html();
            $title = "<div class='title-container col-xs-12'>"+$title+"</div>";
            $('.mobile-display').append($title);
            
            $total = $(this).children('.total').html();
            $total = "<div class='total'>" + $total + "</div>";
            
            $(this).children().children().children('tr').each(function(){
                $trcon = [];
                
                $('tr th').each(function(){
                    $thcon = $(this).html();
                    $thcon = "<h3>"+$thcon+"</h3>";
                    $trcon.push($thcon);
                });
                
                $tdcount = 0;
                
                $(this).children('td').each(function(){
                    $tdcon = $(this).html();
                    $tdcon = "<h4>"+$tdcon+"</h4>";
                    $trtranslated = "<div class='row'>"+$trcon[$tdcount]+$tdcon+"</div>";
                    $('.mobile-display').append($trtranslated);
                    $tdcount++;
                });
            });
            $('.row:last').addClass('last');
            $('.mobile-display').append($total);
        });
    }
});

