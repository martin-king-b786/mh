$(document).ready(function(){
    $browserWidth = $(window).width();
    $( document ).on( 'click', '.close-button', function () {
        $(this).parent().parent().parent().fadeOut();
    });
    
    
        $continents = [];
        $('#worldmap > a').each(function(){
            $aData = $(this).attr('data-content');
            $aLength = $aData.length;
            $aH3 = $aData.indexOf('<h3>');
            $aStart = $aData.slice($aH3,$aLength);
            $aEnd = $aStart.split('</h3>')[0];
            $location = $aEnd.replace('<h3>', '');
            
            $continent = $(this).attr('data-continent');
            
            $inContinents = $.inArray($continent,$continents);
            if($inContinents === -1) {
                $continents.push($continent);
            }
            else {}
        });
        
        $.each($continents,function(index,value){
            $('#mobile').append("<div class='continent' id='"+value+"'><h2><span>"+value+"</span><img src='./css/images/arrow_hollow.png'/></h2><ul></ul></div>");
        });
        
        $('#worldmap > a').each(function(){
            $aData = $(this).attr('data-content');
            $aLength = $aData.length;
            $aH3 = $aData.indexOf('<h3>');
            $aStart = $aData.slice($aH3,$aLength);
            $aEnd = $aStart.split('</h3>')[0];
            $location = $aEnd.replace('<h3>', '');
            
            $continent = $(this).attr('data-continent');
            
            $('.continent').each(function(){
                if($(this).attr('id') === $continent) {
                    $(this).children('ul').append("<li class='country'>"+$location+"</li>");
                }
            });
        });
    
    
    $(document).on('click','.continent',function(){
        $(this).children('ul').slideToggle();
        $(this).children('h2').children('img').toggleClass('rotate');
    });
});