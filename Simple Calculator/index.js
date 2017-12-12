var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");


add.onclick = function() {
    var firstNum = Number(num1.value);
    var secondNum = Number(num2.value);
    addResult.innerHTML = firstNum + secondNum;
}

sub.onclick = function() {
    var thirdNum = Number(num3.value);
    var fourthNum = Number(num4.value);
    subResult.innerHTML = thirdNum - fourthNum;
}

nult.onclick = function() {
    var fifthNum = Number(num5.value);
    var sixthNum = Number(num6.value);
    multResult.innerHTML = fifthNum * sixthNum;
}