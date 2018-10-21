var cosGenerator = require('./cos_magic_item_generator.js');

var numTimes = 1;
var magicItemMode = false;
process.argv.forEach(function(arg, index, array) {
    switch(arg) {
        case '-n':
            numTimes = array[index + 1];
            break;
        case '-m':
            magicItemMode = true;
    }
});

for (let i = 0; i < numTimes; i++) {
    if (magicItemMode) {
        item = cosGenerator.generateMinorMagicItem();
        console.log(`${item.description} and ${item.magicalPower}`);
    }
    else {
        console.log(cosGenerator.generateTrinket());
    }
}
