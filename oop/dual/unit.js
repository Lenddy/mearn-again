import  Card  from "../dual/card";

class Unit extends Card{
    constructor(name,cost, power , resilience){
        super(name,cost)
        this.power = power;
        this.resilience = resilience
    }

    attack(target){
        target = this.resilience -= this.power;
    }
}

let red = new Unit("red belt ninja",3,3,4)

console.log(red)




export const Unit = Unit;