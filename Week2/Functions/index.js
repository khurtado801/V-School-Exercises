var sum = function(num1, num2) {
    var result = num1 + num2;
    console.log(result + "\n");
}
sum(2, 2);

var max = function(num1, num2, num3) {
    //var arr = [num1, num2, num3];
    //console.log(arr[0] + "\n");
    console.log(Math.max(num1, num2, num3) + "\n");
}
max(2, 20, 6);

var evenOdd = function(num1) {
    var result = num1 % 2;
    if (result !== 1) {
        console.log("Even:\n")
    } else {
        console.log("Odd:\n")
    }
}
evenOdd(3)

var stringTheory = function(inputStr) {
    var str = inputStr.length;
    if (str <= 20) {
        var newStr = inputStr.concat(inputStr);
        console.log(newStr + "\n");
    } else {
        var test = inputStr.substring(0, str / 2)
            //var halfLength = str / 2;
        console.log(test + "\n")
    }
}
console.log("This string is 10 characters:")
stringTheory('abcdefghijklmnopqrst');

console.log("\nThis string is more than 10 characters:")
stringTheory('abcdefghijklmnopqrstuvff');