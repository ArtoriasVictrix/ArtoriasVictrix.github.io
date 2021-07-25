"use strict";

// JS-код карты
$(window).on('load', function () {
  ymaps.ready(init);

  function init() {
    var place,
        coords = {
      'ул. Ленинская Слобода, д. 19, 41 я.': [55.708354, 37.652705],
      'Черноморский бульвар д. 10 корпус 2': [55.646584, 37.608383]
    },
        myMap = new ymaps.Map("map", {
      center: [55.681089, 37.624078],
      zoom: 12,
      controls: []
    });

    for (var key in coords) {
      var place = new ymaps.Placemark(coords[key], {
        balloonContent: key
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/marker.svg',
        iconImageSize: [30, 40],
        iconImageOffset: [-15, -40]
      });
      myMap.geoObjects.add(place);
    }
  }
});