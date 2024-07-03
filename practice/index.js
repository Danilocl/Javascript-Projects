
//rest parameters allow a function work with a variable
//number of arguments by bundling them into an array

const number1 = 10;
const number2 = 20;
const number3 = 30;
const number4 = 40;
const number5 = 60;

const string1 = 'rock';
const string2 = 'paper';
const string3 = 'scissors';

function getAverage(...numbers) {
    let temp = 0;
    let average = 0;
    for (sum of numbers) {
        temp += sum
    }
    average = temp / numbers.length;
    return average;
}

function joinStrings(...strings) {
    return strings.join(' ')
}


console.log(getAverage(number1,number2,number3,number4,number5))
console.log("\n")
console.log(joinStrings(string1,string2,string3))
