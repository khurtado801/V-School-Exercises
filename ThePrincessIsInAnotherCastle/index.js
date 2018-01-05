"USE STRICT";

class Player {
    //Player constructor
    constructor(name, totalCoins, status, star){
        this.name = name;
        this.totalCoins = totalCoins;
        //can be: Powered Up, Big, Small, and Dead
        this.status = status;
        //is star active
        this.star = star;
    }

    //setName function definition
    //sets name of player object
    setName (namedPicked){

    }

    //gotHit function definition
    gotHit(){

    }

    //gotPowerup function definition
    gotPowerup(){

    }

    //gameActive function definition
    gameActive(){
        let isActive = true;
    }

    //addCoin function definition
    addCoin(){
        this.totalCoins = this.totalCoins + 1;
    }

    toString(){
        return `${this.name} | ${this.status} | ${this.totalCoins}`
    }

    //print function definition
    print(){
        // return this.name, this.status;
        // console.log(name + " " + this.status);
        console.log(this.toString());
    }

    //random number generator
    //if value is 0 call gotHit()
    //if value is 1 call gotPowerup()
    //if value is 2 call addCion()
    getRandomInt() {
        return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    }
}
let player = new Player("Kenny", 0, "small", false)
console.log(player.getRandomInt());
console.log(player.addCoin());
console.log(player.status);
console.log(player.print());