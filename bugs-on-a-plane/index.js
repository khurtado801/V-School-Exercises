/*

var form = document.getElementByID("airline-form");
var submit = document.getElementByID(submit);
var query = document.querySelector;

function getCheckedValue(radioObj) {
    if (!radioObj)
        return "";
    var radioLength = radioObj.length;
    if (radioLength == undefined)
        if (radioObj.checked)
            return radioObj.value;
        else
            return "";
    for (var i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "";
}
*/

function formAlert() {
    document.getElementById("button").addEventListener("click", function() {
        var airlineForm = document.getElementById("airlineForm");
        var firstName = airlineForm.fname.value;
        var lastName = airlineForm.lname.value;
        var age = airlineForm.age.value;
        var gender = airlineForm.gender.value;
        var destination = airlineForm.destination.value;
        var diet = airlineForm.diet;
        var txt = "";
        var conter = 0;
        for (var i = 0; i < diet.length; i++) {
            if (diet[i].checked && counter === 0) {
                txt = diet[i].value;
                counter++;
            } else if (diet[i].checked) {
                txt = txt + " and " + diet[i].value;
                counter++;
            }
        }

        var formOutPut =
            `First Name: ${firstName}
        Last Name: ${lastName}
        Age: ${age}
        Gender: ${gender}
        Destination: ${destination}
        Dietary Restrictions: ${txt}`
        alert(formOutPut);
    });
}

formAlert();


/*
if (form.elements['vegan'].checked) {
    var diet = pop(document.getElementById("vegan").value);
}
if (form.elements['gluten'].checked) {
    diet.push(document.getElementById('gluten').value);
}
if (form.elements['paleo'].checked) {
    diet.push(document.getElementById('paleo').value);
}


alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);
*/