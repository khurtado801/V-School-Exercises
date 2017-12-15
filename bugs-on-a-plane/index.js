function getInfo() {
    document.getElementById("button").addEventListener("click", function() {
        var airlineForm = document.getElementById("airlineForm");
        var firstName = airlineForm.fname.value;
        var lastName = airlineForm.lname.value;
        var age = airlineForm.age.value;
        var gender = airlineForm.gender.value;
        var destination = airlineForm.destination.value;
        var diet = airlineForm.diet;
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