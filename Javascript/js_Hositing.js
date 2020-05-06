
//#1
//GIVEN
//console.log(hello);
//var hello = 'world';
//HOISTED:
var hello = 'world';
console.log(hello);
//Prediction: 'world'
//Actual: "world"

//#2
//GIVEN:
//var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// HOISTED:
var needle = 'haystack';
var needle = 'magnet';
test();
function test(){
    console.log(needle);
}
//P: magnet
//A: magnet


//#3
//Given:
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
// Hoisted:
var brendan = 'super cool';
console.log(brendan);
//p: 'Super Cool'
//a: 'super cool'

//#4
//Given:
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//Hoisted:
var food = 'chicken'
console.log(food);
eat();
food = 'half-chicken';
console.log(food);
//p: 'chicken', 'half chicken'
//A: 'chicken', 'half chicken'

//#5
//Given:
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//Hoisted:
// This one doesn't really make sense hoisted because you can't do mean = function()
//P: Doesn't work, error?
//A: Error, mean is not a function!

//#6
//Given:
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
//Hoisted:
console.log(genre);
rewind();
    var genre = "rock";
    console.log(genre);
    var genre = r&b;
    console.log(genre);
genre = 'disco';
console.log(genre);
//P: 'rock', 'r&b', 'disco'
//A: Undefined, rock, r&b, disco

//#7
//Given:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
//Hoisted:
var dojo = 'san jose';
console.log(dojo);
learn();
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
console.log(dojo)
//P: 'san jose', 'seattle', 'burbank', 'san jose'
//A: 'san jose', 'seattle', 'burbank', 'san jose'

//#8
// Given:
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
//Hoisted:
console.log(makeDojo("Chicago", 65));
    const dojo = {};
    dojo.name = 'Chicago';
    dojo.students = 65;
    dojo.hiring = true;

console.log(makeDojo("Berkeley", 0));
    const dojo = {};
    dojo.name = 'Berkeley';
    dojo.students = 0;
    dojo = 'closed for now';

//P: I think it'll throw an error because you can't change const..?
//A: Error!




