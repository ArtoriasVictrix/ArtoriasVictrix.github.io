// JS-код страницы index.html

$(window).on('load', function(){
	// Табы на главной
	$('.discounts__content._active').fadeIn();

	$('.discounts__label:not("._more")').on('click', function() {
		var index = $(this).index();
		$('.discounts__label._active, .discounts__content._active').removeClass('_active');
		$(this).addClass('_active');
		$('.discounts__content').eq(index).addClass('_active').fadeIn(300);
	});

	// Слайдер на главной
	var discountsSlider = new Swiper('.discounts-slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	})

});
