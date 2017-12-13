var employees = [];

//Declare Employee object
var Employee = function(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    //status or full time, string is always truthy unless empty
    this.status = status || "Full Time";
}

//Constructor
Employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + "\nTitle: " + "\nSalary: " + "\nStatus" + this.status);
}

//define new objects
var john = new Employee("John", "manager", "100k");
var pollyStaal = new Employee("Polly Stall", "Vice President of Finance", "1,500,000");
var mirandaPriestly = new Employee("Miranda Priestly", "Editor in Chief", "More than all of us", "Weekend Warrior");

//this is how you would change or add the property of a single instance
mirandaPriestly.status = "Contract";
mirandaPriestly.dispostion = "Bitchy";

//for testing
//console.log(john);
//console.log(pollyStaal);
//console.log(mirandaPriestly);

employees.push(john, pollyStaal, mirandaPriestly);
console.log(employees);

//print employees
//john.printEmployeeForm();
//pollyStaal.printEmployeeForm();
//mirandaPriestly.printEmployeeForm();