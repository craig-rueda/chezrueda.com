const fullPage = require('fullpage.js');
const $ = require('jquery');

import Icon from './images/fam.jpg'; // This is needed to force webpack to include unreferenced files

$(() => {
  $('#copyYear').html(new Date().getFullYear()); // Keep the copyright up to date...

  $('#fullpage').fullpage({
    anchors: [ 'main', 'why', 'programs', 'about' ],
    css3: true,
    slidesNavigation: false,
    verticalCentered: false,
    onLeave: (index, nextIndex, direction) => {
      $('#toTop')[nextIndex == 1 ? 'hide' : 'show']();
    }
  });
});
