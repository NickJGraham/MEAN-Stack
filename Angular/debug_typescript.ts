// Nick Graham

// #1
"use strict";
var myString;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "this is a string";
//Answer: The reason why this was bugging is that the var was set to a string but the actual defined myString was set to an integer 9.

//#2

function sayHello(name: string){
    return `Hello, ${name}!`;
}
 // This is working great:
console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));
//Answer: Similar to the first one, the initial var is set as a string, but 9 was input as an interger. By making it a strong with ""'s I was able to get it to work.

//#3

function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
 // This works:
console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "", "Jones"));
//Answer: I just added in ""'s in place of where the middle name would be and it console logged fine.

//#4

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // This was "belt" and would cause an undefined error because it should be belts as indicted above
}
 // This seems to work fine:
console.log(graduate(christine));
 // This one has problems:
console.log(graduate(jay));
//Answer: Needed to change "belt" to "belts" in order for jay to be defined correctly. 

//#5

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
    }
    debug(){
    console.log("Console.log() is my friend.")
    }
}
 // This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Alan", "Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 // Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
 // Now this has problems:
console.log(study(shane));
//Answer: Needed to add "new" to create a new instance of Ninja and provide the first name and last name of the new ninja as parameters. Then you can call shan with the study function. Deleted the workaround as it is unneccsary.

//#6

var increment = (x: number) => {return x + 1};
// This works great:
console.log(increment(3));
var square = (x: number) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => {return x * y};
// Nor is this working:
var math = (x, y) => {  
let sum = x + y;
   let product = x * y;
let difference = Math.abs(x-y);
return [sum, product, difference];
}
// Answer: Removed curly braces where unneed, added where needed. 

//#7

class Elephant {
    constructor(public age: number){}
    birthday = () => {
    this.age++
    }
    }
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 1000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
//Answer: Needed to fix the function by making it an arrow function and that solved it.

