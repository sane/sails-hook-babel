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
        //Activates experimental functionality such as ES7 async/await
        experimental: true,
        //See http://babeljs.io/docs/usage/loose
        //Can be "all", false or a an array, e.g. ["es6.classes", "es6.properties.computed"]
        loose: "all"
      }
    },

    /**
     * Initialize the hook
     * @param  {Function} cb Callback for when we're done initializing
     */
    configure: function() {

      // If the hook has been deactivated, just return
      if (!sails.config[this.configKey].compile) {
        sails.log.verbose("Babel hook deactivated.");
      } else {

        //Load babel and override the default require; with experimental features,
        //such as async/await.
        require("babel/register")({
          experimental: sails.config[this.configKey].experimental,
          loose: sails.config[this.configKey].loose
        });


        sails.log.verbose("babel hook activated. Enjoy ES6/7 power in your Sails app.");
      }
    },

  };

};
