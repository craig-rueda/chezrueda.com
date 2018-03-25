const fullPage = require('fullpage.js');
const $ = require('jquery');


$(() => {
  $('#fullpage').fullpage({
    css3: true,
    slidesNavigation: false,
    verticalCentered: false
  });
});
