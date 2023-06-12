const bestTime = require('../bestTime.js');
const expect = require('chai').expect;

describe('Testing the best time to buy stock algorithm problem from leetcode', function() {
    it('It can handle an empty array', function(done){
        expect(bestTime([])).to.equal(0);
        done();
    })
    it('The algorithm handles an array in which there is no profit possible', function(done) {
        expect(bestTime([7,6,5,4])).to.equal(0);
        done();
    })
    it('The algorithm handles an array in which a profit can be made', function(done){
        expect(bestTime([1,4,7])).to.equal(6);
        done();
    })


})