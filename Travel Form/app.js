function getInfo() {
    document.getElementById("button").addEventListener("click", function() {
        var myForm = document.getElementById("myForm");
        var firstName = myForm.fname.value;
        var lastName = myForm.lname.value;
        var age = myForm.age.value;
        var gender = myForm.gender.value;
        var destination = myForm.destination.value;
        var diet = myForm.diet;
        var txt = "";
        var counter = 0;
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

getInfo();