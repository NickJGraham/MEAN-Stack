var tigger = { character: "Tigger", greeting: function(){console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")}};
var pooh = { character: "Pooh", greeting: function(){console.log("Hello, have some honey!")}};
var piglet = { character: "Piglet", greeting: function(){console.log("Hello, welcoem to my home!")}};
var bees = { character: "Bees", greeting: function(){console.log("Hello, I am Bees!")}};
var robin = { character: "Christopher Robin", greeting: function(){console.log("Hello, want to be friends?")}};
var owl = { character: "Owl", greeting: function(){console.log("Hello, I am an owl.")}};
var rabbit = { character: "Rabbit", greeting: function(){console.log("Hello!")}};
var gopher = { character: "Gopher", greeting: function(){console.log("Hello, I'm Gopher!")}};
var kanga = { character: "Kanga", greeting: function(){console.log("Hello, have some friendship!")}};
var eeyore = { character: "Eeyore", greeting: function(){console.log("Hello...")}};
var heffa = { character: "Heffalumps", greeting: function(){console.log("Hello, I have the craziest name!")}};
var player = { location: tigger }

tigger.north = pooh;

pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;
pooh.north = robin;

piglet.east = tigger.north;
piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffa.west = eeyore;

function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You try to go to the North, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.north;
            console.log("You go North and find yourself at " + player.location.character + "'s house!");
            player.location.greeting();
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You try to go to the South, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.south;
            console.log("You go South and find yourself at " + player.location.character + "'s house!");
            player.location.greeting();
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You try to go to the West, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.west;
            console.log("You go West and find yourself at " + player.location.character + "'s house!");
            player.location.greeting();
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You try to go to the East, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.east;
            console.log("You go East and find yourself at " + player.location.character + "'s house!");
            player.location.greeting();
        }
    }
}
move("north");
move("north");
move("east");
move("east");
move("east");
move("west");