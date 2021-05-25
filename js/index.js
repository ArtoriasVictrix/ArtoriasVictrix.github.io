"use strict";

// JS-код страницы index.html
$(window).on('load', function () {
  // Табы на главной
  $('.discounts__content._active').fadeIn();
  $('.discounts__label:not("._more")').on('click', function () {
    var labelParent = $(this).parents('.discounts');
    var index = $(this).index();
    labelParent.find('.discounts__label._active, .discounts__content._active').removeClass('_active');
    $(this).addClass('_active');
    labelParent.find('.discounts__content').eq(index).addClass('_active').fadeIn(300);
  }); // Слайдер на главной

  var discountsSlider = new Swiper('.discounts-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});