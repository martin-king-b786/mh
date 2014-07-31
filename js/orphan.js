$(document).ready(function(){
    $browserWidth = $(window).width();
    
    $('.location-dropdown').click(function(){
        $(this).children('ul').slideDown();
    });
    $('.location-dropdown').mouseleave(function(){
        $(this).children('ul').slideUp();
    });
    $('.location-dropdown input').click(function(){
        $(this).parent().toggleClass('highlight');
    });
    
    $('.orphan .sponsor').click(function(){
        $orphanImg = $(this).parent().children('.orphan-cont').children('img').attr('src');
        $orphanName = $(this).parent().children('.orphan-cont').children('.content').children('h3').html();
        $orphanFlag = $(this).parent().children('.orphan-cont').children('.content').children('span.col-xs-12').children('img').attr('src');
        $orphanCountry = $(this).parent().children('.orphan-cont').children('.content').children('span.col-xs-12').children('.country').html();
        $orphanAge = $(this).parent().children('.orphan-cont').children('.content').children('span').children('.age').html();
        $orphanAge = $orphanAge.replace('yrs','');
        $orphanId = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-id').html();
        $orphanAsp = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-asp').html();
        $orphanHob = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-hob').html();
        $orphanSup = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-sup').html();
        $orphanDat = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-dat').html();
        $orphanCau = $(this).parent().children('.orphan-cont').children('.content').children('.hidden').children('.orphan-cau').html();
        $orphanOpt =  $(this).parent().children('.orphan-cont').children('.content').children('select').html();
        
        $('#left>img').attr('src',$orphanImg);
        $('#orphan-name').html($orphanName);
        $('#orphan-location>img').attr('src',$orphanFlag);
        $('#orphan-country').html($orphanCountry);
        $('#orphan-age').html('Age '+$orphanAge);
        $('#orphan-id').html($orphanId);
        $('#orphan-asp').html($orphanAsp);
        $('#orphan-hob').html($orphanHob);
        $('#orphan-sup').html($orphanSup);
        $('#orphan-dat').html($orphanDat);
        $('#orphan-cau').html($orphanCau);
        $('#orphan-opt').html($orphanOpt);
        
        $('#selected-orphan').slideDown();
    });
    $('.close').click(function(){
        $('#selected-orphan').slideUp();
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