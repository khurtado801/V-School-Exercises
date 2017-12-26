///////////////////////////////////////////
//Possible things to do in the room
//Look -> will print description of room
//Open door -> try to open door (if you have key go out, if not you FAIL)
//Put hand in the hole in the wall -> they die (GAME OVER)
//Shake Trump's hand -> they die (GAME OVER)
//Take/Grab bottle -> put in inventory
//Take/Grab key -> put in inventory
//Drink bottle -> if drink and throw, super beer powers kick in, you kill Trump, YOU WIN!!
//Throw bottle -> if at window, you win (GAME OVER)

const rs = require("readline-sync");

console.log("Welcome to Election Death Match 2020. This is a cage match election year. You are in a locked cage with a toupee wearing Cheetoo, with its arm extended out, that wants to be your 'friend for life'. \nThere is a door, a bottle of beer, a hidden key, a window, and a hole in the wall. Don't just stand there, get the hell out before Donald Trump \ntries to shake your hand or defeats you in this years Election Death Match!!");
let inv = [];
let isAlive = true;
let length = 0;
let alphaOnly = /[abcdefghijklmnopqrstuvwxyz]/g;

let usrName = rs.question("\nWelcome first election candidate, what is your name? ");
while (!usrName.match(alphaOnly)) {
    usrName = rs.question("\nDon't be a lame, please enter a vaild name: ");
}

let userName = usrName.toLowerCase();

length = userName.length;
let firstChar = userName.substring(0, length - length + 1);
firstChar = firstChar.toUpperCase();
let lastChars = userName.substring(1, length + 1);
let properName = firstChar.concat(lastChars);
console.log("\nLet's give our first candidate " + properName + " a warm Election Death Match welcome!")
let userInput = rs.question("Are you ready to fight? ").toLowerCase();
while (userInput === "yes" || userInput === "y" || userInput === "true") {
    console.log("\nLet's get ready to rumble!");

    while (isAlive) {
        userInput = rs.question("What would you like to do " + properName + "? ");
        userInput = userInput.toLowerCase();
        while (!userInput.match(alphaOnly)) {
            userInput = rs.question("\nDon't be a lame, please enter a valid command: "); {
                if (userInput.includes("look")) {
                    console.log("\nYou are in a locked cage with a toupee wearing Cheetoo, with its arm extended out, that wants to be your 'friend for life'. \nThere is a door, a bottle of beer, a hidden key, a window, and a hole in the wall.")
                } else if (userInput.includes("shake") && userInput.includes("hand") || (userInput.includes("grab") && userInput.includes("hand"))) {
                    console.log("\nYou have been covered with a toxic Cheetoo dust and die a slow painful death.");
                    isAlive = false;
                    console.log("\nLooks like " + properName + " has fallen to Trump's poisoned Cheetoo chi dust powder and died.\nHere's to another four years of big business USA running America.");

                } else if (userInput.includes("open") && userInput.includes("door")) {
                    if (inv.includes("key")) {
                        console.log("\nYou have succesfully defended America against the TV personallity. Let's give it up to the new president of the United States of America " + properName + "!")
                        break;
                    } else {
                        console.log("\nYou are not the Key Master...yet!")
                    }
                } else if (userInput.includes("hand") && userInput.includes("hole")) {
                    console.log("\nDo you just put your hand in any old hole? YOU DIED!")
                    break;
                } else if (userInput.includes("take") && userInput.includes("bottle") || (userInput.includes("grab") && userInput.includes("bottle"))) {
                    console.log("\nYou have placed the bottle in your inventory. ")
                    inv.push("bottle");
                } else if (userInput.includes("drink") && inv.includes("bottle") || (userInput.includes("drink") && userInput.includes("beer"))) {
                    console.log("\nYou now have your beer goggles strapped tight and have been granted the gift of sight. You can see a key in this dark reality. The key has been added to your inventory.")
                    inv.push("key");
                    inv.pop("bottle");
                } else if (userInput.includes("take") && userInput.includes("key") || (userInput.includes("grab") && userInput.includes("key"))) {
                    console.log("\nYou have placed the key in your inventory. ")
                    inv.push("key");
                } else if (userInput.includes("throw") && userInput.includes("bottle") && userInput.includes("window")) {
                    console.log("\nYou have broke the window and created a way to escape. YOU WON THE");
                    break;
                } else if (userInput.includes("throw") && userInput.includes("bottle") && userInput.includes("trump")) {
                    console.log("\nNow you are stuck in a locked room with the corpse of Donald Trump? YOU DIED!");
                    break;
                }
            }
        }
    }
}