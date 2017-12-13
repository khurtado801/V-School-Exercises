var rs = require("readline-sync");


console.log("Welcome to the Node Calulator. This calculator will add, multiply, divide, and subtract.\n")
var sum = 0;
var product = 0;
var quotient = 0;
var difference = 0;
var num1 = 0;
var num2 = 0;

num1 = rs.question("Please enter your first number: ");
num2 = rs.question("Please enter your second number: ");
var usrOperation = rs.question("Please enter the operation to perform: add, mult, div, sub\n");

function add(numb1, numb2) {
    sum = Number(numb1) + Number(numb2);
    return sum;
}

function mult(numb1, numb2) {
    product = Number(numb1) * Number(numb2);
    return product;
}

function div(numb1, numb2) {
    quotient = Number(numb1) / Number(numb2);
    return quotient;
}

function sub(numb1, numb2) {
    quotient = Number(numb1) - Number(numb2);
    return quotient;
}


if (usrOperation == "add") {
    console.log(add(num1, num2));
} else if (usrOperation == "mult") {
    console.log(mult(num1, num2));
} else if (usrOperation == "div") {
    console.log(div(num1, num2));
} else if (usrOperation == "sub") {
    console.log(sub(num1, num2));
} else return;