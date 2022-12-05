import {Card} from "./card";

class Effect extends Card{
    constructor(name, cost,text ,stat, magnitude){
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target ){
        if(target instanceof Unit){
            if(this.stat == "resilience" && this.magnitude == + Number){
            return target += this.resilience += this.magnitude;
            }
            if(this.stat == "resilience" && this.magnitude == - Number){
            return target += this.resilience -= this.magnitude;
            }
            if(this.stat == "power" && this.magnitude == + Number){
                return target += this.power += this.magnitude;
                }
            if(this.stat == "power" && this.magnitude == - Number){
                return target += this.power -= this.magnitude;
                }
        }
        else{
            throw new Error("target mus be a unit!");
        }
    }
}

export const Effect = Effect;