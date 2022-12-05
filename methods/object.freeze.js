const list = [1,2,3,4]; //suppose to be immutable due to the const variable
list.push(5);//how ever you can still push and pop values
console.log(list)//[1,2,3,4]

//* to avoid this and actually make it an immutable variable you need to do this

const list2 = Object.freeze([1,2,3,4,5]);
list2.push(6);
// console.log(list2);// gives you an error 
