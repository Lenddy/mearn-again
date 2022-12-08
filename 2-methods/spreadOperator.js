// immutable list 
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

//* if we want to add a values to the list we cant
//! we will need to make a copy of the list using the spread operator [...arrayName]

const bread = [...groceryList,{"item": "bread",    "haveIngredient" : false}]
console.log(bread);//the values should be added [...groceryList,{"item": "bread",    "haveIngredient" : false}
// this works because we made a copy of the original list not use the some list 


//* We can also use .concat() for this one. Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
console.log(needThyme)

//* If we find that we already have "thyme" and we want to set the "haveIngredient" to true we can write something like...

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

console.log(gotTheThyme)




//* If celery is "ingredient non grata", we could remove it also using slice...
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
// Once again we can use slice, the first slice giving us the ingredients at indexes 0 and 1, the second slice giving us all the ingredients with indexes from 3 to the end.




// Sorting

// The sort function is really useful, however when we run it it manipulates the array it was run upon instead of giving us a new one.

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 

//*  We can however get around this with some clever use of the spread ... operator.

const sortedItems = [...items].sort();
// This will return the Grocery List items in a sorted manner.

console.log(sortedItems)