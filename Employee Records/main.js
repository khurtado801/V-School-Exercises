function Dog(name, breed, color, age, barkSound) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.barkSound = barkSound;
    this.bark = function() {
        console.log(this.barkSound)
    }
}

var myDog = new Dog("Buckeye", "Chocolate Lab", "Brown", 1, "woof");
var yourDog = new Dog("Cooter", "Mutt", "Black", 1, "arrrf");

console.log(myDog);
console.log(yourDog);