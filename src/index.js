const fullPage = require('fullpage.js');
const $ = require('jquery');

import Icon from './images/fam.jpg'; // This is needed to force webpack to include unreferenced files

$(() => {
  $('#fullpage').fullpage({
    css3: true,
    slidesNavigation: false,
    verticalCentered: false
  });
});
