
/**
 * Module dependencies.
 */

var zest = require('zest')
  , query = require('query');

// register engine

query.engine({
  all: zest,
  one: function(selector, el){
    return zest(selector, el)[0];
  }
});
