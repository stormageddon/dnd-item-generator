// Unit tests for item generator
var assert = require('assert');
var cosGenerator = require('../cos_magic_item_generator.js');

describe('Curse of Strahd Minor Item Generator Tests', function() {
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

    it('Should import cosGenerator', function() {
        assert.ok(cosGenerator);
    });

    it('Should return a trinket', function() {
        let trinket = cosGenerator.generateTrinket(fakeRandom);
        assert.ok(trinket);
        assert.ok(trinket.length > 0 && typeof trinket == 'string')
    });

    it('Should return different items', function() {
        let trinket1 = cosGenerator.generateTrinket(fakeRandom),
            trinket2 = cosGenerator.generateTrinket(fakeRandom);

        assert.ok(trinket1 !== trinket2);
        assert.equal(trinket1, 'A lock that opens when blood is dripped in its keyhole');
        assert.equal(trinket2, 'A frayed cloak stolen from a Scarecrow');
    });

    it('Should return even if no random generator provided', function() {
        let trinket = cosGenerator.generateTrinket();
        assert.ok(typeof trinket === 'string');
        assert.ok(trinket.length > 0);
    })
});