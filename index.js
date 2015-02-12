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
        // Turn 6to5 compile on by default
        compile: true
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    configure: function() {

      // If the hook has been deactivated, just return
      if (!sails.config[this.configKey].compile) {
        sails.log.verbose("Traceur hook deactivated.");
      } else {

        //Load 6to5 and override the default require; with experimental features,
        //such as async/await.
        require("6to5/register")({
          experimental: true
        });


        sails.log.verbose("6to5 hook activated. Enjoy ES6/7 power in your Sails app.");
      }
    },

  };

};
