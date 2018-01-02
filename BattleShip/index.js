const rs = require("readline-sync");
//first component is a grid
//second component is a location object that contains info about a particular coordinate
//third component is the game loop

//return true 1 out of 10 times
//if random number is 0, return true
function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

//location object so that we know what is in the coordinate
function Location() {
    this.isShip = whetherShip;
    this.isHit = false;
    this.display = "~";
}


//constructor declaration
function Grid() {
    this.grid = [];
    this.totalShips = 0;

}

//grid prototype declaration, will generate grid
Grid.prototype.genGrid = function() {
    for (var i = 0; i < 8; i++) {
        this.grid.push([]);
        for (var j = 0; j < 8; j++) {
            //instantiate location object
            //location is an instance of a Location object.
            //'Location' is the constructor
            var location = new Location();
            //add to total ships
            if (location.isShip) {
                this.TotalShips++;
            }
            //add location to grid
            this.grid[i].push(location);
        }
    }
}

//prototype declaration
Grid.prototype.displayGrid = function() {
    //print grid to screen
    for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        //push indiviual location objects into array
        for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }

}

//attack
Grid.prototype.attack = function(x, y) {
    //reversd so that 'y' is vertical for user and 'x' is horizontal for user
    //refering to object on grid
    let coord = this.grid[y][x];
    coord.isHit = true;
    if (coord.isShip) {
        coord.display = "x";
        this.totalShips--;
    } else {
        coord.display = "o";
    }
}

//Game flow:
//When game starts, show a brand new grid
//asks you to enter in an x and y coordinate
//shows the grid again but this time it displays the result of your attack
//process repeats until all ships are dead
//Send victory message to console, end game


//for testing
let game = new Grid();
game.genGrid();
//game.displayGrid();


//keep track of all the past attacks
//make sure that we enter coordinates that aren't on the grid

//GAME LOOP HELPER FUNCTIONS

function validateCoord(x, y) {
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length;
}

function validateAttack(x, y) {
    x = Number(x);
    y = Number(y);
    return !game.grid[y][x].isHit;
}


let turnCounter = 20;
console.log("\nWelcome to Battleship\n");
game.displayGrid();
while (true) {
    console.log("\nRemaining turns: " + turnCounter + "\n");
    let xLimit = game.grid.length - 1;
    let yLimit = game.grid[0].length - 1;
    let x = rs.keyIn("Choose an X coordinate between 0 and " + xLimit + "\n", { limi: "$<1-" + xLimit + ">" });
    let y = rs.keyIn("Choose a Y coordinate between 0 and " + yLimit + "\n", { limit: "$<1-" + yLimit + ">" });
    if (!validateCoord(x, y)) {
        console.log("\nNo soup for you!! Try entering a valid coordinate...fool!")
        continue;
    }
    if (!validateAttack(x, y)) {
        console.log("\nSorry you alrady attacked that location!\n");
    }
    game.attack(x, y);
    turnCounter--;
    if (turnCounter === 0) {
        break;
    }
    if (game.totalShips === 0) {
        break;
    }
    game.displayGrid();
}
if (turnCounter > 0) {
    console.log("VICTORY!")
} else {
    console.log("YOU DEAD!")
}