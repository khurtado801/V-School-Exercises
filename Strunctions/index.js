//concatanate two or more strings
var conCatStr = function() {
    var str1 = "Hello";
    var str2 = " World!";
    var fixedStr = str1.concat(str2);
    console.log(fixedStr + "\n");
}
conCatStr();

//return index of !
var findIndex = function() {
    var str = "So long and thanks for all the fish. Here?!";
    var indexOfFish = str.indexOf("!");
    console.log(indexOfFish + "\n");
}
findIndex();

//return index of Towel
var findLastStr = function() {
    var str = "Don't forget your towell!"
    var indexLastStr = str.lastIndexOf("towel");
    console.log(indexLastStr + "\n")
}
findLastStr();

//searches a string for a match against a regular expression
//and returns the matches, as an Array object.
var strMatch = function() {
    var str = "I am the one they call I am."
    var matchedStr = str.match(/am/g);
    console.log(matchedStr + "\n");
}
strMatch();

//search string for specified value, or regular experssion
//and return new string where specified values are replaced
var strReplace = function() {
    var str = "You rock!";
    var replacedStr = str.replace("you", "I");
    console.log(replacedStr + "\n");
}
strReplace();

//extracts parts of a string and returns the extracted
//parts in a new string.
//use the start and end parameters to specify the part of
//the string you want to extract.
var strSlice = function() {
    var becky = ["Oh ", "my ", "god ", "becky ", "look ", "at ", "her ", "butt "]
    var newBecky = becky.slice(4, 8);
    var usedBecky = newBecky.toString();
    console.log(newBecky + "\n");
}
strSlice();

//split a string into an array of substrings, and returns the new array
var greetings = function() {
    var str1 = "Wu zap o nig?";
    var helo = str1.split(" ");
    console.log(helo + "\n");
}
greetings();

var pissedOff = function() {
    var amNot = "I'M NOT YELLING, YOU ARE!";
    var toldYou = amNot.toLocaleLowerCase();
    console.log(toldYou + "\n");
}
pissedOff();

var sheIs = function() {
    var iWas = "I'm fine!";
    var whatEver = iWas.toLocaleUpperCase();
    console.log(whatEver + "\n")
}
sheIs();

//extracts parts of a string, beginning at the character at the specified position
//and returns the specified number of characters.
var iKid = function() {
    var someSay = "Assume"
    var itsTrue = someSay.substr(0, 3);
    console.log(itsTrue + "\n");
}
iKid();