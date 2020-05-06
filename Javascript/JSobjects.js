// Challenge #1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function getNames(arr){
    for(var i = 0; i < arr.length; i++){
        console.log("Student Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}

console.log(getNames(students));

// Challenge #2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
    {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
    {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function getUsers(obj){
    for(let division in users){
        console.log(division.toUpperCase());
        for(var i = 0; i < users[division].length; i++){
            var count = users[division][i].last_name.length + users[division][i].first_name.length;
            console.log(i+1 + " - " + users[division][i].last_name.toUpperCase() + ', ' + users[division][i].first_name.toUpperCase() + " - " + count)
        }
    }
}

console.log(getUsers(users));