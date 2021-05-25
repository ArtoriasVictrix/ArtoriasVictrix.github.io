"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(window).on('load', function () {
  // Слайдер в карточке товара
  $('.product-card__slider').each(function () {
    var _Swiper;

    var productСardSlider = new Swiper(this, (_Swiper = {
      autoplay: true
    }, _defineProperty(_Swiper, "autoplay", {
      delay: 4000,
      disableOnInteraction: false
    }), _defineProperty(_Swiper, "spaceBetween", 24), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "navigation", {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }), _defineProperty(_Swiper, "pagination", {
      el: '.swiper-pagination',
      clickable: true
    }), _Swiper));
  }); // Раскрыть весь текст в карточке

  $(".product-card__more").on('click', function () {
    $(this).toggleClass('_opened');
    $(this).prev('.product-card__desc').toggleClass('_opened');
  }); // Выбрать товар

  $(".js-choose-product").on('click', function () {
    if ($(this).children('input').is(':checked')) {
      $(this).parent().addClass('_checked');
    } else {
      $(this).parent().removeClass('_checked');
    }
  });
});