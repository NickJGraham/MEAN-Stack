function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("Hiya, my name is "+name+" !");
    }
    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
    }
    this.drinkSake = function(){
        this.health = this.health + 10;
    }
}

var ninja1 = new Ninja("Nick");
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();