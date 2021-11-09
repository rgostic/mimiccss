var assert  = require('assert'),
    example = require('../src/index.js');

describe('example', function () {
    it('should return text', function() {
        var result = example.exampleTask();
        var expect = 'task 1 done'
        assert.equal(result, expect)
    })
})