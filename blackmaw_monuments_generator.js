const descriptors = ["Whispering","Arcane","Ivy-covered","Ruined","Spiked","Spired","Ancient","Crumbling","Pristine","Ornate","Runed","Decorated","Charred","Glyphed","Glowing","Floating","Cracked","Shattered","Marble","Obsidian","Metallic","Buried","Foggy","Flaming","Frozen","Poisonous","Necrotic","Thunderous"];
const origins = ['titanic',"draconic","dwarven","elven","prehistoric","divine","unholy","abyssal","orcish","undead","goblinoid","ghoulish","dark elven","elemental","giant","infernal","cyclopean","aberrant","nightmarish","astral","ethereal","shadowy","feyish","gnomish","natural","clockwork","druidic","alien"];
const monuments = ['skull','statue','tomb','totem','mausolem','meteorite','obelisk','monolith','altar','fountain','slaughterfield','cairn','temple','geode','podium','pillar','well','throne','ship','tree','doll','barrow','archway','gravestone','ruins','fossil','battlefield','mosaic','sigil'];


function generateMonument(num = 10) {
    return Array(num).fill("").map(i => descriptors[Math.floor(Math.random() * descriptors.length)] + ' ' + origins[Math.floor(Math.random() * origins.length)] + ' ' + monuments[Math.floor(Math.random() * monuments.length)])
}

module.exports = {
    generateMonument: generateMonument
}