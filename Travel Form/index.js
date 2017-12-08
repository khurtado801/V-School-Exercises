function myFunction(field1, field2, field3, field4) {
    var fname = document.getElementById(field1).value;
    var lname = document.getElementById(field2).value;
    var age = document.getElementById(field3).value;
    var gender = document.getElementById(field4).value;
    alert(fname + " " + lname + " " + age + " " + gender);
}