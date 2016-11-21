/*
    Prototypal Inheritance: an object can INHERIT properties from its prototypes
        obj -> prop1
             -> prototype1 -> prop2
        obj.prop1
        obj.prop2
        prototype chain
    Function Constructors: a normal function that is used to construct/initialize objects
        use this to create a property for an empty object
        use new to create a new object from the function constructor
*/

// Create a function constructor -> like a class constructor in Java
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

// This is the prototype of any object created from Person (not of Person) -> add the greet function to the prototype
Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + " " + this.lastname);
};

// Make a new object from function constructor
var michael = new Person("Michael", "Hsu");
michael.greet();

var tae = new Person("Taewon", "Kim");
tae.greet();

// Show object's prototype
console.log(michael.__proto__);
console.log(tae.__proto__);
console.log(michael.__proto__ == tae.__proto__);