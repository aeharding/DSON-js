require('../dson2.js');
var assert = require("assert")
describe('DSON', function(){
    it('should be available', function(){
      assert(typeof DSON === 'object', 'DSON is an object');
    });
    it('should have parse property function', function() {
      assert(typeof DSON.parse === 'function', 'No parse function');
    });
    it('should have stringify property function', function() {
      assert(typeof DSON.stringify === 'function', 'No stringify function');
    });


    describe('stringify', function() {
      it('supports such ... is ... wow', function() {
        var dsonExample = {"foo": "bar"};
        assert(DSON.stringify(dsonExample) === 'such"foo"is"bar"wow', 'Such fail');
      });
      
      it('supports "so ... next ... [more] ... many" for arrays', function() {
        var dsonExample = {"foo": ["bar", "baz", "fizzbuzz"]};
        console.log(DSON.stringify(dsonExample))
        assert(DSON.stringify(dsonExample) === 'such"foo"isso"bar"next"baz"next"fizzbuzz"manywow', 'Such fail');
      });
    });

    describe('parse', function() {
      it('supports such ... is ... wow', function() {
        var dsonExample = 'such"foo"is"bar"wow';
        assert.deepEqual(DSON.parse(dsonExample), {foo: 'bar'}, 'Such fail');
      });
      
      it('supports "so ... next ... [more] ... many" for arrays', function() {
        var dsonExample = 'such"foo"isso"bar"next"baz"next"fizzbuzz"manywow';
        console.log(DSON.stringify(dsonExample))
        assert.deepEqual(DSON.stringify(dsonExample), {"foo": ["bar", "baz", "fizzbuzz"]}, 'Such fail');
      });
    });


});
