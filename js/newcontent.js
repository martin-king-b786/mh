$(document).ready(function(){
    $('.section-link').click(function(){
        $sectionTitle = $(this).children('span.title').html();
        $sectionImage = $(this).children('span.image').children('img').attr('src');
        $sectionContent = $(this).children('span.content').html();
        
        $('.sectioned-container h3').html($sectionTitle);
        $('.sectioned-section img').attr('src',$sectionImage);
        $('.sectioned-section-content').html($sectionContent);
        
        $('.section-link.active').removeClass('active');
        $(this).addClass('active')
    });
});