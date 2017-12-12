document.getElementById("main").onmousedown = function() { mouseDown() };
document.getElementById("main").onmouseup = function() { mouseUp() };

var main = document.getElementById("main");
main.onmouseover = function() {
    main.style.backgroundColor = "blue";
};

main.onmousedown = function() {
    main.style.backgroundColor = "red";
};

main.onmouseup = function() {
    main.style.backgroundColor = "yellow";
};

main.ondblclick = function() {
    main.style.backgroundColor = "green";
};

window.onscroll = function() {
    main.style.backgroundColor = "orange";
};

window.onkeypress = function(e) {
    if (e.keyCode === 98) {
        main.style.backgroundColor = "blue";
    } else if (e.keyCode === 103) {
        main.style.backgroundColor = "green";
    } else if (e.keyCode === 114) {
        main.style.backgroundColor = "red";
    } else if (e.keyCode === 121) {
        main.style.backgroundColor = "yellow";
    } else if (e.keyCode === 111) {
        main.style.backgroundColor = "orange";
    }
};