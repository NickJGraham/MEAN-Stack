function coinChange(cents){
    let pennies = 0;
    let nickels = 0;
    let dimes = 0;
    let quarters = 0;
    let dollars = 0;
    pennies = cents % 100;
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies)/10;
    temp = pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;
    console.log("Pennies: "+pennies);
    console.log("Nickels: "+nickels);
    console.log("Dimes: "+dimes);
    console.log("Quarters: "+quarters);
    console.log("Dollars: "+dollars);
}
console.log(coinChange(312));