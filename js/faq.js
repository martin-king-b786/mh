$(document).ready(function(){
   $('.faqs li').click(function(){
       $(this).children('.answer').slideToggle();
   }); 
});