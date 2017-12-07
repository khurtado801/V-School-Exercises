//ThereIsNoSpoon
//Create 10 JavaScript objects
//Laptop, Monitor, Pen, Bike, Table, Person, Mug, Room, Turntable, Beer

var laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2013,
    price: 1300,
    isReplaceable: false,
    write: function() {
        console.log("I'm a " + this.make + " " + this.model + " " + this.year + " " + "laptop that costs $" + this.price + ". Avaiable for upgrade: " + laptop.isReplaceable + ".\n");
    }
}
laptop.write();

var monitor = {
    make: "ASUS",
    color: "Black",
    features: ["HDMI ", "VGA ", "DVI ", " DisplayPort"],
    isWorking: "false",
    write: function() {
        console.log("I'm a " + this.color + " " + this.make + " monitor with, " + monitor.features.toString() + ". " + "In working condition: " + monitor.isWorking + ".\n")
    }
}
monitor.write();

var pen = {
    color: "Blue",
    price: 5,
    isMine: false,
    write: function() {
        console.log("I'm a " + this.color + " pen that costs $" + this.price + ". " + "Is it mine: " + this.isMine + ".\n");
    }
}
pen.write();


var table = {
    type: "mountain",
    price: 100,
    isNew: false,
    write: function() {
        console.log("I'm a " + this.type + " bike that costs $" + this.price + "\n");
    }
}
table.write();

var person = {
    name: "Ken",
    gender: "Male",
    isMarried: true,
    attributes: [" a head", " brown hair", " brown eyes", " two arms", " and two legs."],
    write: function() {
        console.log("My name is " + this.name + ". I'm a " + this.gender + ", with" + person.attributes.toString() + " Am I married? " + this.isMarried + ".\n");
    }
}
person.write();

var room = {
    item: "office",
    shape: "square",
    capacity: 10,
    isWired: true,
    write: function() {
        console.log("I'm a " + this.shape + " " + this.item + " with a capacity of " + this.capacity + ". But is it wired?  " + this.isWired + ".\n");
    }
}
room.write();

var turnTable = {
    item: "Turntable",
    make: "Technic",
    model: 1200,
    price: 1000,
    isWorking: true,
    recordsIncluded: true,
    recordList: ["Delusions of Grandeur ", " Purple Disco Machine ", " Diazapam Jam"],
    write: function() {
        console.log("I'm a " + this.make + " " + this.model + " " + this.item + ". Working condition: " + this.isWorking + ". Are records included: " + this.recordsIncluded + ". Which records are included: " + turnTable.recordList.toString() +
            "\n");
    }
}
turnTable.write();

var beer = {
    isCan: false,
    isCold: true,
    quantity: 36,
    greeting: "Hello, My name is Ken and I'm an alcoholic. ",
    inStock: ["Peroni", "Corona", "Bluemoon", "Fat Tire", "Blue Paddle"],
    write: function() {
        console.log(beer.greeting + "I have " + beer.quantity + " beers. " + "Are they in a can? " + beer.isCan + ". But are they cold? " + beer.isCold + ".\n");
    },
    ofChoice: function() {
        var myFavs = beer.inStock.splice(0, 2);
        //var bestBest = myFavs.toString();
        //var topList = inStock[0];
        console.log("Can you guess which two are my favorites? " + myFavs.toString() + ".\n");
    }
}
beer.write();
beer.ofChoice();