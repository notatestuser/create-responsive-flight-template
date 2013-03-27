// Defines the main app module. This one does the top level app wiring.

define(
  [
    'jquery',
    './components/button'
  ],

  function ($, Button) {
    'use strict';

    // Wait for the DOM to be ready before showing the network and appCache
    // state.
    $(function () {

      // Attach our button components.
      Button.attachTo('.button-box', {
        buttonName: 'me'
      });

    });
  }
);
