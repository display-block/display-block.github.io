$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");
});


$(function(){


	var i = 1;
	var that = null; 
	$(".social-icons li a").click(function(){
		
		if( i == 1){
			 that = $(this);
			$(this).siblings().show().parent().siblings().children("span").hide();
			i = 0;
		}
		else{
			if(( $(this) == that)){
				$(this).siblings().hide().parent().siblings().children("span").hide();
				i =1;
			}
			else{
				$(this).siblings().show().parent().siblings().children("span").hide();
			}		
		}	
	});


    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "./img/bg1.jpg", 
	 		 "./img/bg2.jpg",
			 "./img/bg3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})
