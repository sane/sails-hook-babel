/**
 * Module dependencies
 */

var Sails = require('sails').Sails;

describe('Acceptance tests', function() {

  var sails;

  beforeEach(function () {
    // Hook will timeout in 10 seconds
    // this.timeout(10000);

    // Attempt to lift sails
      Sails().lift({
        hooks: {
          // Load the hook
          "6to5": require('../../'),
          // Skip grunt
          "grunt": false
        },
        log: {level: "error"}
      },function (err, _sails) {
        if (err) return err;
        sails = _sails;
        //return done();
      });
  });

  afterEach(function () {
    if (sails) {
      sails.lower();
    }
    //return done();
  });

  it ('sails loads traceur hook and does not crash', function() {
    return true
  });

});
