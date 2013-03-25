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

      // Enable the UI bindings for the network and appCache displays
      require(['app/uiNetwork', 'app/uiAppCache', 'app/uiWebAppInstall'],
        function(uiNetwork, uiAppCache, uiWebAppInstall) {
          uiNetwork();
          uiAppCache();
          uiWebAppInstall();
        }
      );

    });
  }
);
