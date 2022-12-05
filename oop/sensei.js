
class Sensei extends Ninja{
    constructor(name,health = 200,speed =10, strength=10,wisdom = 10){
        super(name,health, speed, strength)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        return `${this.drinkSake()} What one programmer can do in one month, two programmers can do in two months. ${this.showStats()}`
    }
}





let s1 = new Sensei("rob")


console.log(s1)
console.log(s1.speakWisdom())