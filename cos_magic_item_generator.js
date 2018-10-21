// Curse of Strahd minor magic item generator
function generateTrinket(randomIntFunc) {
    randomInt = randomIntFunc || getRandomInt;
    trinkets = [
        'A lock that opens when blood is dripped in its keyhole',
        'A frayed cloak stolen from a Scarecrow',
        'A spinning top carved with four faces: happy, sad, wrathful, and dead',
        'A wig from someone executed by beheading',
        'An old necklace with cracked beads',
        'A pocket watch that runs backward for an hour every midnight',
        'A wineskin that refills when interred with a dead person for a night',
        'A set of silverware used by a king for his last meal',
        'A spyglass that always shows the world suffering a terrible storm',
        'A cameo with the profile\'s face scratched away',
        'A lantern with a black candle that never runs out and that burns with green flame',
        'A teacup from a child\'s eta set, stained with blood',
        'A little black book that records your dreams, and yours alone, when you sleep',
        'A necklace formed of the interlinked holy symbols of a dozen deities',
        'A hangman\'s noose that feels heavier than it should',
        'A birdcage into which small birds fly but once inside never eat or leave',
        'A lepidopterist\'s box filled with dead moths with skull-like patterns on their wings',
        'A jar of pickled gouls tongues',
        'The wooden hand of a notorious pirate',
        'An urn with the ashes of a dead wizard',
        'A hand mirror backed with a bronze depiction of a medusa',
        'Pallid leather gloves crafted with ivory fingernails',
        'Dice made from the knuckles of a notorious charlatan',
        'A ring of keys for forgotten locks',
        'Nails from the coffin of a murderer',
        'A key to a long dead families crypt',
        'A bouquet of funerary flowers that always looks and smells fresh',
        'An infernal switch engraved with scenes of demons on the handle',
        'A music box that plays by itself whenever someone holding it dances',
        'A walking cane with an iron ferule that strikes sparks on stone',
        'A flag from a ship lost at sea',
        'Porcelain doll head that always seems to be looking at you',
        'A wolf\'s head wrought in silver that is also a whistle',
        'A small mirror that shows a much older version of the viewer',
        'Small, worn book of children\'s nursery rhymes',
        'A mummified raven claw',
        'A broken pendent of a silver dragon that is always cold to the touch',
        'An ancient amulet of a silver dragon that is always warm to the touch',
        'A small locked box that quietly hums a lovely melody at night but you always forget it in the morning',
        'An inkwell that makes one a little nauseous when staring at it',
        'An old little doll made from a dark, dense wood and missing a hand and a foot',
        'A black executioner\'s hood',
        'A pouch made of flesh, with a sinew drawstring',
        'A tiny spool of black thread that never runs out',
        'A tiny clockwork figurine of a dancer that\'s missing a gear and doesn\'t work',
        'A black wooden pipe that creates puffs of smoke that look like skulls',
        'A vial of perfume, the scent of which only certain creatures can detect'
    ]
    return trinkets[randomInt()];
}

function getMinorItem() {
    return generateTrinket(Math.random);
}

function getRandomInt() {
    MAX = 50;
    return Math.floor(Math.random() * Math.floor(MAX));
  }

module.exports = {
    generateTrinket: generateTrinket
}