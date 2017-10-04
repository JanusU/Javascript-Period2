var assert = require('assert');
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});



describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.be.equal(-1);
      expect([1,2,3].indexOf(0)).to.be.equal(-1);
    });
  });
});


describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
});