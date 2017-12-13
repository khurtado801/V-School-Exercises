var rs = require("readline-sync");
var usrNameCharCnt = 0;


var fname = rs.question("What is your first name? ");
var lname = rs.question("What is your last name? ");

var newStr = fname.concat(lname);

console.log("Sweet! Nice to meet you " + fname.toUpperCase() + ". ");
for (var i = 0; i < fname.length; i++) {
    usrNameCharCnt += 1;
}

console.log("There are " + usrNameCharCnt + " characters in your first name. ");


var age = rs.question("I'm older than time itself. How old are you? ");
console.log("Awesome. So far, I know that your name is " + newStr + " and you are " + age + " years old.")

var message = rs.question("Give me a little background about you, and I'll repeat back what I can remember: ");

function checkLength(str) {
    if (str.length > 20) {
        return str.slice(Math.floor(message.length / 2))
    } else {
        return str;
    }
}

console.log("\nHere is the last half of your message. It's all I could remember, get off my ass!\n" + "'" + checkLength(message) + "'\n");
console.log("I couldn't remember much because you are fairly boring. So I'm going to display what I recall you rambling on about. I want you to to select a spot to start typing again so you can make it somewhat entertaining.\n");
console.log("Here is your rambling: \n" + message + "\n");
var userChoice = rs.question("What index should I start from?\n");
console.log(message.slice(Number(userChoice)));