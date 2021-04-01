// Unit tests for item generator
var assert = require('assert');
var blackmawGenerator = require('../blackmaw_monuments_generator.js');

describe('Blackmaw Monument Generator Tests', function() {
    let fakeRandom = null;
    beforeEach(function() {
        let isFirstTime = true;
        fakeRandom = function() {
            var result = 1;
            if (isFirstTime) {
                isFirstTime = false;
                result = 0;
            }

            return result;
        }
    });

    it('Should import blackmawGenerator', function() {
        assert.ok(blackmawGenerator);
    });

    it('Should return a blackmaw monument', function() {
        let generatedMonuments = blackmawGenerator.generateMonument();
        console.log(generatedMonuments);
        assert.ok(generatedMonuments.length > 0);
    });
});