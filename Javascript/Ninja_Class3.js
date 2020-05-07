class Ninja {
    constructor(name){
        this.name = name;
        var health = 100;
        var speed = 3;
        var strength = 3;
    }
        sayName(){
            console.log("Yo my name is "+this.name+" Dattebayo!");
        }
        showStats(){
            console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength "+this.strength);
        }
        drinkSake(){
            this.health = this.health + 10;
        }
    }

    //Part 2: Sensei
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("When in doubt during algos, just type in random ideas until the thing works!")
    }
}
const superSensei = new Sensei("Naruto the 7th Hokage");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();
