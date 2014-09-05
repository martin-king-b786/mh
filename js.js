$ = jQuery;
$(document).ready(function(){
    // Crop Images
	$('.widget_fv_widget ul li').each(function(){
		$(this).css('height',$(this).width());
		
	  	var height = $(this).children('img').height();
		var width = $(this).children('img').width();
                                
		if(height > width) {
                    $(this).children('img').css({
                        width : '100%',
                        height : 'auto'
                    });
		}
		else {
                    $(this).children('img').css({
                        width : 'auto',
                        height : '100%'
                    });
		}
                
	});
        
    
    var vidsrc = $('#video iframe').attr('src');
    $('#video>#video-container>p>iframe').attr('src',vidsrc+'?audio=1');
    
        
});


