var tigger = { character: "Tigger"};
var pooh = { character: "Pooh"};
var piglet = { character: "Piglet"};
var bees = { character: "Bees" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffa = { character: "Heffalumps" };
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
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You try to go to the South, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.south;
            console.log("You go South and find yourself at " + player.location.character + "'s house!");
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You try to go to the West, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.west;
            console.log("You go West and find yourself at " + player.location.character + "'s house!");
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You try to go to the East, but unfortunately the way is blocked off.")
        }
        else {
            player.location = player.location.east;
            console.log("You go East and find yourself at " + player.location.character + "'s house!");
        }
    }
}
move("north");
move("north");
move("east");
move("east");
move("east");
move("west");