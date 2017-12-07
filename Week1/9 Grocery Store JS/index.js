var shopper = {
    firstName: "Ken",
    lastName: "Hurtado",
    age: 42,
    money: true,
    groceryCart: ["Beer", "Toilet Paper", "Eggs", "Milk"],

    metaDetails: function() {
        console.log("\nName: " + shopper.firstName + " " + shopper.lastName + "\n" + "Age: " + shopper.age + "\n" + "Access to money: " + shopper.money + "\nDisplay cart contents: " + "\n" + shopper.groceryCart.toString() + "\n");
    }
};
shopper.metaDetails();