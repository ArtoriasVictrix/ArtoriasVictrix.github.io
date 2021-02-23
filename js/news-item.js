$(window).on('load', function () {
	// Слайдер на странице одной статьи
	$('.article-slider._thumbs').each(function(){
		var articleSliderThumbs = new Swiper (this, {
			spaceBetween: 15,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			slideToClickedSlide: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
				400: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				900: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 7,
				}
			}
		});


		var articleSlider = new Swiper($(this).prev(), {
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: articleSliderThumbs
			},
			on: {
				// Переключение на след. слайд, если последний видимый
				slideChange: function () {
					let activeIndex = this.activeIndex;
					let activeSlide = $('.article-slider._thumbs .swiper-slide').eq(activeIndex);
					let nextSlide = $('.article-slider._thumbs .swiper-slide').eq(activeIndex + 1);
					let prevSlide = $('.article-slider._thumbs .swiper-slide').eq(activeIndex - 1);
					if (nextSlide && !nextSlide.hasClass('swiper-slide-visible')) {
						this.thumbs.swiper.slideNext();
					} else if (prevSlide && !prevSlide.hasClass('swiper-slide-visible')) {
						this.thumbs.swiper.slidePrev();
					}
				}
			}
		});
	});
});
