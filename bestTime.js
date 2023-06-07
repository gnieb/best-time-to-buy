const bestTime = require('../bestTime.js');
const expect = require('chai').expect;

describe('Testing the best time to buy stock algorithm problem from leetcode', function() {
    it('It can handle an empty array', function(done){
        expect(bestTime([])).to.equal(0);
        done();
    })


})