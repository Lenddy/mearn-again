// .Map()

// One of the functions that we'll be using most frequently is map. Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
// This will take a list of items and return an array of strings resembling html "list items"... 

// ["<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>"]
console.log(groceryList);


// We can also use map with an array of numbers

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

// This will create list of cubed numbers. [1, 8, 27, 64, 125]
// Map is a function that applies a callback function to each item in an array and returns that new array

console.log(cubes)





// .filter()
// Sometimes we want to get an array with only some of the values, we can do something similar and provide a callback function, this time one that returns true if we want the value or false if we don't want the value

const evens = values.filter( val => val % 2 === 0 );
// This will create a list of only the even values... [2, 4] if we wanted the odds we could get them by changing the === to !==


// If we want only the groceries that have the letter "o" in them we could write...

// const oFoods = groceries.filter( item => item.includes("o") );
// We can do anything we want with that callback function as long as it returns true or false. We can even chain filter and map together if we want to.

const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

// This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]