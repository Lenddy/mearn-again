class Dancer {
    constructor(name, age, musicType , stamina = 100){
        this.name = name;
        this.age = age ;
        this.musicType = musicType;
        this.stamina = stamina
    }

    melody(){
        return this.stamina += (25/100)* this.stamina
    }

}

let list = ["bachata","merengue"]

let d1 = new Dancer("Lenddy",19,list,60);

console.log(d1)
d1.melody()
console.log(d1)

class StreetDancer extends Dancer{
    constructor(name,age,stamina, style = 7){
        super(name,age,"All types",stamina)
        this.style = style;
    }

    styleUp(){
        return console.log(this.melody() * this.style)
    }

}

let s1 =  new StreetDancer("luis",25,80)


console.log(s1)
s1.styleUp()
console.log(s1)
