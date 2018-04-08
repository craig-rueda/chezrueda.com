const $ = require('jquery');
const loadGoogleMapsApi = require('load-google-maps-api');
const email = 'chez@chezrueda.com';

import Icon from './images/fam.jpg'; // This is needed to force webpack to include unreferenced files

loadGoogleMapsApi({
  key: 'AIzaSyAaM6D35-s8inC8PNd2KhQY3JpDtfZGqYM'
}).then((googleMaps) => {
  var belmont = { lat: 37.520336, lng: -122.276086 };
  var infowindow = new google.maps.InfoWindow({
    content: '<div style="color: #000;">Your Transformation Begins Here</div>'
  });
  var map = new googleMaps.Map(document.querySelector('.map'), {
    center: belmont,
    zoom: 14,
    fullscreenControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    styles: [
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
  });
  var marker = new google.maps.Marker({
    position: belmont,
    map: map,
    title: 'Hello World!'
  });
  infowindow.open(map, marker);
}).catch(function (error) {
  console.error(error)
})

$(() => {
  $('#copyYear').html(new Date().getFullYear()); // Keep the copyright up to date...
  $('#email').html(email);
  $(document).scroll((arg) => {
    var position = $(window).scrollTop();
    $('#toTop')[position > 100 ? 'show' : 'hide']();
  });
});
