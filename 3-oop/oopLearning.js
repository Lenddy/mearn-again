//* this is how you make classes in javascript

/* 
key word  class  className{
    keyWord constructor(attributes){
        keyWord this.
    }
}

*/

// this is how you create a class
class human{
    // this is how you create a constructor
    constructor(Fname,Lname,Age,Position,speed = 100){
        // this is how you created the attributes 
        this.fName = Fname;
        this.lName = Lname;
        this.age = Age;
        this.Speed = speed;
        this.position = Position
    }
    
    speedUp(){
        return this.Speed += 10
    }

    stats(){
        // the this key word is referring to the instance that is calling the method
        return console.log(`full name: ${this.fName} ${this.lName} \n age: ${this.age} \n speed: ${this.Speed}`)
    }

    fullName(){
        return console.log(`${this.fname} ${this.lName}`) ; 
    }
}

//  // this is how you create and instance of a class in js 
let human1 = new human("Lenddy","Morales",19,"human")

// human1.stats()
// human1.speedUp()
// console.log("________________________________")
// human1.stats()



class teacher extends human{
    constructor(Fname, Lname,Age,){
        super(Fname,Lname,Age,"teacher")
    }

}


let t1 = new teacher("lenddy","Morales",19);

// console.log(t1)

// t1.speedUp()

// console.log(t1)


class Student extends human{
    constructor(FName,Lname,Age, ClassNum=[]){
        super(FName,Lname,Age,"student")
        this.classNum = ClassNum
    }
    
    numberCLass(){
        return`number of classes being taken ${this.classNum.length}`;
    }
}
let someLis = ["python","js"]

let s1 = new Student("Juan","Antony", 29,someLis)

console.log(s1.numberCLass())


let list = [];

list.push(s1)

console.log(list)