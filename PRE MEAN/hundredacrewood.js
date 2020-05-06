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

