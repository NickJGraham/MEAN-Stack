function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("Hiya, my name is "+name+"!");
    }
    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
    }
    this.drinkSake = function(){
        this.health = this.health + 10;
    }
    this.punch = function(target){
        if (target instanceof Ninja){
            target.health = target.health - 5;
            console.log(target.name+" was punched by "+this.name+" and lost 5 health!")
        }
    }
    this.kick = function(target){
        if (target instanceof Ninja){
            target.health = target.health - (15*strength);
            console.log(target.name+" was kicked by "+this.name+" and lost "+15*strength+" health!")
    }
}
}


var Nick = new Ninja("Nick");
var Nathan = new Ninja("Nathan");
console.log(Nick);
Nick.sayName();
Nick.showStats();
Nick.punch(Nathan);
Nick.kick(Nathan);
