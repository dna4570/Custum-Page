const mySwiper = new Swiper('.swiper',{
	loop:true,

	pagination: {
		el:'.swiper-pagination',
	},

	navigation: {
		nextEL: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: 'swiper-scrollbar',
	},
});
