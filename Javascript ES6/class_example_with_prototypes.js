/*
    Prototypal Inheritance: an object can INHERIT properties from its prototypes
        obj -> prop1
            -> prototype1 -> prop2
        obj.prop1
        obj.prop2
        prototype chain
    Function Constructors: a normal function that is used to construct/initialize objects
        use this to create a property for an empty object
        use new to create a new object of the function constructor
*/

"use strict"; // stricter version of javascript

// Not recommended, since it isn't like classes in other languages
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Add properties to the prototype of class
    greet() {
        console.log("Hello" + this.firstname + " " + this.lastname);
    }
}

// Make a new Person object
var michael = new Person("Michael", "Hsu");
michael.greet();

var tae = new Person("Taewon", "Kim");
tae.greet();

// Show object's prototype
console.log(michael.__proto__);
console.log(tae.__proto__);
console.log(michael.__proto__ == tae.__proto__);