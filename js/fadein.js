
// alert("こんにちわ");

$(function(){
	$(window).scroll(function(){
		$(".scroll-block").each(function(){
			var scroll = $(window).scrollTop();
			var blockPosition = $(this).offset().top;
			var windowHeight = $(window).height();
			if(scroll > blockPosition - windowHeight + 300){
				$(this).addClass("blockIn")
			}
		})
	});
});
