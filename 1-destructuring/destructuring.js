// destructing is a simple way of getting information  form a type like a dictionary or and array





let person = {
    name:"lenddy",
    lastName:"Morales",
    age:19
}

let animal = ["dog", "cat","tiger"]

//* normal way 
let fname = person.name
console.log(fname,"or", person.name);

let oneAnimal = animal[0]
console.log(oneAnimal,"or", animal[0])

//* destructuring way 

const {age} = person;
console.log(age)

const [firstAnimal] = animal;
console.log(firstAnimal)

// ! destructuring is doing the same thing  as getting information form a type just in another way use the one that you prefer





// you can also take the information of a an array and  and make another array in side of it

let [,...someAnimal]  = animal

console.log(someAnimal);