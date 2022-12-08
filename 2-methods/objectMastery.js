const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//! .filter() Practice

const bListPkm = pokémon.filter( p => p.name[0] == "B" || p.name[0] == "b")

const pid = pokémon.map(p =>  p.name )

// console.log(pid)

// console.log(bListPkm)

//* an array of pokémon objects where the id is evenly divisible by 3
const by3 = pokémon.filter(id => id.id % 3 == 0)
// console.log(by3)

//* an array of pokémon objects that are "fire" type
const fireType = pokémon.filter(type => type.types[0] == "fire" || type.types[1] == "fire")
// console.log(fireType)

//* an array of pokémon objects that have more than one type
const moreThan1 = pokémon.filter(m => m.types.length > 1)
// console.log([...moreThan1])

//* an array with just the names of the pokémon
const Pname =  pokémon.map(n => n.name);
// console.log(Pname)
//* an array with just the names of pokémon with an id greater than 99
const nameMore99 = pokémon.filter(n => n.id > 99).map(p => p.name)
// console.log(nameMore99)

//* an array with just the names of the pokémon whose only type is poison
const onlyPoison = pokémon.filter(t => t.types == "poison").map(n => n.name);
// console.log(onlyPoison)


//* an array containing just the first type of all the pokémon whose second type is "flying"
const firstType = pokémon.filter(t => t.types[1] == "flying").map(ft => ft.types[0]);
// console.log(firstType);

//* a count of the number of pokémon that are "normal" type

const count = pokémon.filter( (item)=>
{if(item.types == "normal"){ return true}
else{return false}
}).length;

// console.count(count)