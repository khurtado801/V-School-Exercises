// Make a site that tracks how many times the user has clicked anywhere
// on the page (or a specific button if you prefer) and displays that
// click count to the user. Then, using localStorage or sessionStorage,
// make it so the number of clicks will remain on the screen even after
// the site is refreshed.


// function clickCounter() {
//     if (typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount) + 1;
//         } else {
//             localStorage.clickcount = 1
//         }
//         document.getElementById("result").innerHTML = "You've clicked " + localStorage.clickcount + " time(s).";
//     } else {
//         document.getElementById("result").innerHTML = "Your browser sucks!"
//     }
// }

let clickCounter = () => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clkCnt) {
            localStorage.clkCnt = Number(localStorage.clkCnt) + 1;
        } else {
            localStorage.clkCnt = 1;
        }
        document.getElementById("result").innerHTML = "You've clicked " + localStorage.clkCnt + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Your browser sucks!"
    }
}