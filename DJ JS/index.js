document.getElementById("main").onmousedown = function() { mouseDown() };
document.getElementById("main").onmouseup = function() { mouseUp() };


/*
function mouseDown() {
    document.getElementById("main").innerHTML = "The mouse button is held down.";
}

function mouseUp() {
    document.getElementById("main").innerHTML = "You released the mouse button.";
}

function mouseDouble() {
    document.getElementById("demo").innerHTML = "Hello World";
}
*/

function myFunction() {
    document.getElementById("inner").style.color = "green";
}