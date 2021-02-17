$(window).on('load', function () {

	// Слайдер в карточке товара
	$('.product-card__slider').each(function(){
		var productСardSlider = new Swiper (this, {
			autoplay: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			spaceBetween: 24,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	});


	// Раскрыть весь текст в карточке
	$(".product-card__more").on('click', function() {
		$(this).toggleClass('_opened');
		$(this).prev('.product-card__desc').toggleClass('_opened');
	});


	// Выбрать товар
	$(".js-choose-product").on('click', function() {
		if ($(this).children('input').is(':checked')){
			$(this).parent().addClass('_checked');
		} else {
			$(this).parent().removeClass('_checked');
		}
	});
});
