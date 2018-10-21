var cosGenerator = require('./cos_magic_item_generator.js');

var numTimes = 1;
process.argv.forEach(function(arg, index, array) {
    if (arg === '-n') {
        numTimes = array[index + 1];
    }
});

for (let i = 0; i < numTimes; i++) {
    console.log(cosGenerator.generateTrinket());
}
