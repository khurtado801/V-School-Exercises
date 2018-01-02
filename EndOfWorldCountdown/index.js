var seconds;
var temp;

function printStuff() {
    console.log("Hello, World!");
}

printStuff();

function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 1) {
        temp = document.getElementById('countdown');
        temp.innerHTML = "And no one noticed that the human race had left the race.";
        return;
    }

    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
}



countdown();