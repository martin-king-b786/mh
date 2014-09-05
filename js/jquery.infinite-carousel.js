/**
 * @author Stéphane Roucheray 
 * @extends jquery
 */

$j.fn.carousel = function(previous, next, options){
	var sliderList = $j(this).children()[0];
	
	if (sliderList) {
		var increment = $j(sliderList).children().outerWidth("true"),
		elmnts = $j(sliderList).children(),
		numElmts = elmnts.length,
		sizeFirstElmnt = increment,
		shownInViewport = Math.round($j(this).width() / sizeFirstElmnt),
		firstElementOnViewPort = 1,
		isAnimating = false;
		
		for (i = 0; i < shownInViewport; i++) {
			$j(sliderList).css('width',(numElmts+shownInViewport)*increment + increment + "px");
			$j(sliderList).append($j(elmnts[i]).clone());
		}
		
		$j(previous).click(function(event){
			if (!isAnimating) {
				if (firstElementOnViewPort == 1) {
					$j(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
					firstElementOnViewPort = numElmts;
				}
				else {
					firstElementOnViewPort--;
				}
				
				$j(sliderList).animate({
					left: "+=" + increment,
					y: 0,
					queue: true
				}, "swing", function(){isAnimating = false;});
				isAnimating = true;
			}
			
		});
		
		$j(next).click(function(event){
			if (!isAnimating) {
				if (firstElementOnViewPort > numElmts) {
					firstElementOnViewPort = 2;
					$j(sliderList).css('left', "0px");
				}
				else {
					firstElementOnViewPort++;
				}
				$j(sliderList).animate({
					left: "-=" + increment,
					y: 0,
					queue: true
				}, "swing", function(){isAnimating = false;});
				isAnimating = true;
			}
		});
	}
        for (i = 0; i < shownInViewport; i++) {
            j = numElmts - i - 1;
            $j(sliderList).prepend($j(elmnts[j]).clone());
        }
};
