/**
 * Module dependencies
 */

var Sails = require('sails').Sails;
// var assert = require('chai').assert;

describe('Empty test', function() {

  var sails;

  beforeEach(function () {
    // Hook will timeout in 10 seconds
    this.timeout(10000);

    // Attempt to lift sails
      Sails().lift({
        hooks: {
          // Load the hook
          "babel": require('../../'),
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

  it ('Somehow need this test for mocha to finish', function() {
    return true;
  });

});
