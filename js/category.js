"use strict";

$(document).ready(function () {
  // Range input
  var priceRange = document.getElementById('price-range');
  noUiSlider.create(priceRange, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  }); // Switching the result

  $('.catalogue__sort-view label').on('click', function () {
    $('.catalogue__result').toggleClass('_list');
    $('.catalogue__preview').toggleClass('col-12 col-4 _t-6 _m-m-12 _m-s-12');
  });
  $('.catalogue__heading').on('click', function () {
    $(this).toggleClass('open');
    $('.catalogue__filters').slideToggle(500);
  });
  var countRange = document.getElementById('count-range');
  noUiSlider.create(countRange, {
    start: [10, 50],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
  var powerRange = document.getElementById('power-range');
  noUiSlider.create(powerRange, {
    start: [0, 70],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
});