var path = require('path');

module.exports = function(sails) {

  return {

    /**
     * Default configuration
     *
     * We do this in a function since the configuration key for
     * the hook is itself configurable, so we can't just return
     * an object.
     */
    defaults: {

      __configKey__: {
        // Turn babel compile on by default
        compile: true,
        // Doesn't import polyfill by default
        polyfill: false,
        // Activates preset tranformations
        presets: ['es2015']
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    configure: function() {

      var config = sails.config[this.configKey];

      // If the hook has been deactivated, just return
      if (!config.compile) {
        sails.log.verbose("Babel hook deactivated.");
      } else {

        if (config.polyfill) {
          require("babel-polyfill");
        }

        delete config.polyfill;
        delete config.compile;

        require("babel-register")(config);

        sails.log.verbose("Babel hook activated. Enjoy ES6/7 power in your Sails app.");
      }
    },

  };

};
