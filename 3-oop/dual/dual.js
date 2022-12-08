
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}





class Unit extends Card{
    constructor(name,cost, power , resilience){
        super(name,cost)
        this.power = power;
        this.resilience = resilience
    }

    attack(target){
        if(target instanceof Unit){
        return console.log(` ${this.name} attack ${target.name} and and its resilience went down from ${target.resilience} to ${target.resilience -= this.power}`);
        }
        else{
            throw new Error("target must be a unit!");
        }
    }
}


class Effect extends Card{
    constructor(name, cost,text ,stat, magnitude){
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
            return console.log(`${target.name} resilience is now ${target.resilience += this.magnitude}`);
            }
            if(this.stat == "power"){
                return console.log(`${target.name} power is now ${target.power += this.magnitude}`);
                }
        }
        else{
            throw new Error("target must be a unit!");
        }
    }
}


// units
let red = new Unit("red belt ninja",3,3,4)
let black = new Unit("black belt ninja",4,5,4)

// effects
let hard = new  Effect("hard",2,"increase target's resilience by 3","resilience",+ 3)
let Unhandled = new  Effect("Unhandled",1,"reduce target's resilience by 2","resilience", - 2)
let Pair = new  Effect("Pair",3,"increase target's power by 2","power", + 3)

console.log(red);
hard.play(red);
Unhandled.play(red);
Pair.play(red);
red.attack(black);
