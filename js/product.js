$(window).on('load', function () {
	// Слайдер одного продукта
	var productSliderThumbs = new Swiper('.product-slider._thumbs', {
		spaceBetween: 10,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		breakpoints: {
			320: {
				slidesPerView: 3
			},
			400: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 5
			}
		}
	});
	var productSlider = new Swiper('.product-slider._main', {
		slidesPerView: 1,

		thumbs: {
			swiper: productSliderThumbs
		},
		on: {
			slideChange: function () {
				let activeIndex = this.activeIndex;
				console.log(activeIndex)
				let activeSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex);
				let nextSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex + 1);
				let prevSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex - 1);
				if (nextSlide && !nextSlide.hasClass('swiper-slide-visible')) {
					this.thumbs.swiper.slideNext();
				} else if (prevSlide && !prevSlide.hasClass('swiper-slide-visible')) {
					this.thumbs.swiper.slidePrev();
				}
			}
		}
	});


	// Переход на вкладку характеристики
	$('.go-specifications').on('click', function() {
		$('.tabs__label').removeClass('_active')
						.eq(1).addClass('_active');
		$('.tabs__content').removeClass('_active')
						.eq(1).addClass('_active');
	});
});
