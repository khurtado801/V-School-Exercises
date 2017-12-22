// function Animal(name) {
//     this.name = name;
//     this.hasCellWall = false;
// }
// Animal.prototype.print = function () {
//     for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log(`${key}: ${this[key]}`);
//         }
//     }
// }

// function Mammal() {
//     Animal.call(this);
//     this.hasFur = true;
// }
// Mammal.prototype = Object.create(Animal.prototype);

/******************************************************** */
/*

class Animal {
    constructor(name) {
        this.hasCellWall = false;
        this.name = name;
    }
    print() {
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
}

class Mammal extends Animal {
    constructor(name, furType) {
        super(name);
        this.hasFur = true;
        this.furType = furType;
    }
}


let coyote = new Animal("coyote");
coyote.print();
let whale = new Mammal("whale", "whaleHair");
whale.print();

*/
/****************************************************** */

//make two constructor functions
//one must inherit from the other
//add a prototype print() method to the 'parent'
//make an instance of each, and call their print methods

//do the same using es6 class syntax;




let fox = {};
fox.noise = function(line) {
    console.log("What does the fox say?\n" + line);
}

fox.noise("Fraka-kaka-kaka-kaka-kow! Fraka-kaka-kaka-kaka-kow! Fraka-kaka-kaka-kaka-kow!\n")