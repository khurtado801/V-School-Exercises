function addition() {
    var firstNum = document.getElementById('firstAddend').value;
    var secondNum = document.getElementById('secondAddend').value;
    document.getElementById('addAnswer').innerHTML = parseInt(firstNum) + parseInt(secondNum);
}

function subtract() {
    var firstNum = document.getElementById('firstMinuend').value;
    var secondNum = document.getElementById('secondMinuend').value;
    document.getElementById('subAnswer').innerHTML = parseInt(firstNum) - parseInt(secondNum);
}

function multiply() {
    var firstNum = document.getElementById('firstFactor').value;
    var secondNum = document.getElementById('secondFactor').value;
    document.getElementById('multAnswer').innerHTML = parseInt(firstNum) * parseInt(secondNum);
}