// Multiple ways to create a prototype chain

// Create a prototype from the object literal
var person = {
    firstname: "",
    lastname: "",
    greet: function() {
        return this.firstname + " " + this.lastname;
    }
}

// Create an object that inherits from person
var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

// John is an empty object whose prototype is the person object literal
var jane = Object.create(person);
john.firstname = "Jane";
john.lastname = "Doe";

console.log(john.greet());
console.log(jane.greet());  