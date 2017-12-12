/*
function myFunction(field1, field2, field3, field4) {
    var fname = document.getElementById(field1).value;
    var lname = document.getElementById(field2).value;
    var age = document.getElementById(field3).value;
    var gender = document.getElementById(field4).value;
    alert(fname + " " + lname + " " + age + " " + gender);
}
*/

var name = document.getElementById("name");
var age = document.getElementById("age");
var birthday = document.getElementById("birthday");
var gender = document.getElementByName("gender");

var form = document.getElementById("form");
var output = {};


function getsGender() {
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
        return "not given";
    }
}

function getFavorites() {
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].checked) {
            output.push(favorites[i].value)
        }
    }
    return output;
}

function beautify() {
    return "First name: " + output.fname + "\nGender: " + output.gender + "\nFavorites: " + output.favorites.join(", ")
}

function submit() {
    output.fname = fname.value;
    output.gender = getsGender();
    output.favorites = getFavorites();
    alert(beautify());
    alert(output);
}
form.onsubmit = submit;