var fruit = ["Banana", "Apple", "Orange", "Watermelon"];
var vegtables = ["Carrot", "Tomato", "Pepper", "Lettuce"];

//var popVeg = vegtables.pop();
//console.log("Vegtables: ", vegtables);

//var fruitRemoved = fruit.splice(0, 1);
//console.log("Fruit: ", fruit);

//var indexOfFruit = fruit.indexOf('Orange');
//console.log("Fruit: ", indexOfFruit);

//var indexOfFruit = fruit.indexOf('Orange');
//console.log("Fruit: ", fruit + "", indexOfFruit);

//var vegLength = vegtables.length;
//console.log(vegLength);

//var vegLength = vegtables.length;
//console.log("Vegtables: ", vegtables + "", vegLength);

//var food = fruit.concat(vegtables);
//console.log("Food: ", food);

//var food = fruit.concat(vegtables);
//food.splice(4, 2);
//console.log("Food Removed: ", food);

var food = fruit.concat(vegtables);
food.reverse();
console.log("Reversed: ", food);

var food = fruit.concat(vegtables);
console.log(food.toString());