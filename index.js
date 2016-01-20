var path               = require('path'),
    sourceMapSupport   = require('source-map-support'),
    babelRegisterCache = require('babel-register/lib/cache');

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

        if (sails.config.environment != 'production') {

          sourceMapSupport.install({
            retrieveSourceMap: function(file) {

              var cache = babelRegisterCache.get(),
                  sourceMap = null;

              Object.keys(cache).some(function(hash) {

                var fileCache = cache[hash]; 
              
                if (fileCache.options.filename != file) {
                  return false;
                }

                sourceMap = {
                  url: file,
                  map: fileCache.map
                };

                return true;
              });

              return sourceMap;
            }
          });
        }

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
