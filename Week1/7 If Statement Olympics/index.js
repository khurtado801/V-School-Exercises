var person = {
    name: "Bobby",
    age: 12
}


var movieTime = function() {
    var str = person.name;
    var newStr = str.slice(0, 1);
    if (newStr === 'B') {
        console.log("Go see your filth Mr. B!\n");
    } else {
        console.log("No filth for you Mr. B!\n");
    }
}

movieTime();