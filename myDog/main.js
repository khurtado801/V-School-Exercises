//object declaration
function Dog(name, breed, color, age, barkSound) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.barkSound = barkSound;
}

//prototype
//defining prototype object called bark 
//myDog has a property called barkbject that called it
//function creates new 'this' object
//'this' referres to the o
Dog.prototype.bark = function() {
    console.log(this.barkSound);
    //uncomment to test bark
    //return this.barkSound
}

//constructor declaration
function Wolf(name, breed, color, age, barkSound) {
    //call function but refer to Wolf
    Dog.call(this, name, breed, color, age, barkSound);
}


//prototype constructor of Wolf is the same thing as the prototype of Dog
Wolf.prototype.bark = function() {
    console.log(this.barkSound.toUpperCase() + "!!!!!!!");
    //uncomment to test bark
    //return this.barkSound.toUpperCase() + "!!!!!!!"
}


//object definition instaniation
var myDog = new Dog("Buckeye", "Chocolate Lab", "Brown", 1, "woof");
var yourDog = new Dog("Cooter", "Mutt", "Black", 1, "arrrf");
var myWolf = new Wolf("Ginger", "Siberian", "White", 3, "ooowwwwwooww");

myDog.bark();
yourDog.bark();
myWolf.bark();

function testDog(dog) {
    if (dog.bark().includes("!")) {
        console.log("Sorry too loud");
    } else {
        console.log("I'll take it")
    }
    dog.bark();
}

//uncomment to test bark
//testDog(myWolf);