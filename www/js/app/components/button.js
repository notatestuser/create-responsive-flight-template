define(
  [
    'flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(button);

    function button() {
      this.defaultAttrs({
        buttonSelector: '.btn',
        disabledAttr:   'disabled',
        disabledText:   'You got me.',
        enabledText:    'Click me!'
      });

      // mark button as selected. mark others as not selected. trigger buttonClicked event
      this.clickButton = function(e) {
        e.preventDefault();

        // only dispatch the event to other components if we're not disabled ourselves
        if ( ! $(e.target).hasClass('disabled')) {
          this.trigger(document, 'buttonClicked', {
            button:     $(e.target),
            buttonName: this.attr.buttonName || ''
          });
        }
      };

      // when our button is clicked, we'll toggle its visible state
      this.buttonClicked = function(e) {
        var $button = this.select('buttonSelector');

        $button.toggleClass(this.attr.disabledAttr);

        if ($button.hasClass('disabled')) {
          $button.text(this.attr.disabledText);
        } else {
          $button.text(this.attr.enabledText);
        }
      }

      this.after('initialize', function() {
        // 'buttonSelector' is defined in defaultAttr
        this.on('click', {
          buttonSelector: this.clickButton
        });

        this.on(document, 'buttonClicked', this.buttonClicked);
      });
    }

  }
);
