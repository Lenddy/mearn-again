class Ninja{
    constructor(name, health, speed = 3, strength = 3, ){
        this.name = name;
        this.health = health; 
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`name: ${this.name}`)
    }

    showStats(){
        return `Name:${this.name}\n Strength: ${this.strength} \n Speed: ${this.speed} \n Health: ${this.health} `
    }

    drinkSake(){
        return this.health += 10
    }
}



let n1 = new Ninja("Lenddy",100,100, 60)

// console.log(n1)

// n1.sayName()

// console.log(n1.showStats())

// n1.drinkSake()

// console.log(n1.showStats())


class Sensei extends Ninja{
    constructor(name,health = 200,speed =10, strength=10,wisdom = 10){
        super(name,health, speed, strength)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        return ` What one programmer can do in one month, two programmers can do in two months. ${this.drinkSake()} \n${this.showStats()} `
    }
}





let s1 = new Sensei("rob")


console.log(s1)
console.log(s1.speakWisdom())