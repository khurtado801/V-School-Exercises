function addMath() {
    var numb1 = document.getElementById('num1').value;
    var numb2 = document.getElementById('num2').value;
    document.getElementById('sum').innerHTML = parseInt(numb1) + parseInt(numb2);
}

function subMath() {
    var numb1 = document.getElementById('num1').value;
    var numb2 = document.getElementById('num2').value;
    document.getElementById('difference').innerHTML = parseInt(numb1) - parseInt(numb2);
}

function mltMath() {
    var numb1 = document.getElementById('num1').value;
    var numb2 = document.getElementById('num2').value;
    document.getElementById('product').innerHTML = parseInt(numb1) * parseInt(numb2);
}