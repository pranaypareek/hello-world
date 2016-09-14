var assert = require('assert'),
    vows = require('vows'),
    calculator = require('../lib/calculator.js');

//unit-test-1
vows.describe('add-numbers').addBatch({
  'Adding two numbers': {
    topic: calculator.addTwoNumbers(4, 4),
    'should give a valid result': function (result) {
      assert.isNumber(result);
      assert.equal(result, 8);
    }
  }
}).export(module);
