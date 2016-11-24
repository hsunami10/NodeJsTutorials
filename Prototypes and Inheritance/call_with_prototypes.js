var util = require("util");

// Function constructor
function Person() {
    this.firstname = "Michael";
    this.lastname = "Hsu";
}

// Add greet function to the function constructor's prototype -> allows any object created from Person to use this
Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + " " + this.lastname);
}

// this is the empty object of the Policeman constructor
// Person.call(this) adds the properties of Person to the empty object of Policeman
function Policeman() {
    // Policeman gets all the properties of Person
    Person.call(this);
    this.badgenumber = "1234";
}

Policeman.prototype.badge = function() {
    console.log("The badge number is " + this.badgenumber);
}

// Person prototypes are now also Policeman prototypes
util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();
officer.badge();

var michael = new Person();
michael.greet();