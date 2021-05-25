"use strict";

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
      slideChange: function slideChange() {
        var activeIndex = this.activeIndex;
        console.log(activeIndex);
        var activeSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex);
        var nextSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex + 1);
        var prevSlide = $('.product-slider._thumbs .swiper-slide').eq(activeIndex - 1);

        if (nextSlide && !nextSlide.hasClass('swiper-slide-visible')) {
          this.thumbs.swiper.slideNext();
        } else if (prevSlide && !prevSlide.hasClass('swiper-slide-visible')) {
          this.thumbs.swiper.slidePrev();
        }
      }
    }
  }); // Переход на вкладку характеристики

  $('.go-specifications').on('click', function () {
    $('.tabs__label').removeClass('_active').eq(1).addClass('_active');
    $('.tabs__content').removeClass('_active').eq(1).addClass('_active');
  });
  $('#goodReviews input[type="text"], #goodReviews textarea').tooltipster({
    //find more options on the tooltipster page
    trigger: 'custom',
    // Default is 'hover' which is no good here
    position: 'top',
    onlyOne: false,
    parent: 'main'
  });
  $('#goodReviews input[type="checkbox"]').tooltipster({
    trigger: 'custom',
    position: 'top',
    onlyOne: false,
    parent: 'main'
  }); // Initialize validate plugin on the form

  $('#goodReviews').validate({
    errorPlacement: function errorPlacement(error, element) {
      if (error[0].innerHTML != null && error[0].innerHTML !== "") {
        $(element).tooltipster('content', $(error).text());
        $(element).tooltipster('open'); // Open only if the error message is not blank. By default jquery-validate will return a label with no actual text in it so we have to check the innerHTML.

        $(element).closest('.form-group').addClass('_error');
        $(element).closest('.checkbox').addClass('_error');
      }
    },
    success: function success(label, element) {
      var obj = $(element);

      if (obj.hasClass('tooltipstered') && obj.hasClass('error')) {
        $(element).tooltipster('close'); // Hide no longer works in v4, must use close

        $(element).closest('.form-group').removeClass('_error');
        $(element).closest('.checkbox').removeClass('_error');
      }
    },
    rules: {
      // Select element by 'name' attribute
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      'review-text': {
        required: true,
        minlength: 2
      },
      check11: {
        required: true
      }
    }
  });
});