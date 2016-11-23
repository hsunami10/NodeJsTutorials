// Example of inheriting from the event emitter

"use strict";

var EventEmitter = require("events");
var util = require("util");

/* ES6 Version
class Greetr() extends EventEmitter { // same as util.inherits
    constructor() {
        super(); // Inherits methods and properties of inherited class
        this.greeting = "Hello world!";
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit("greet", data);
    }
}
*/

function Greetr() {
    // Super constructor -> constructor that the object is inheriting from
    // Makes sure that an object created from Greetr() has everything an object created from EventEmitter would have
    EventEmitter.call(this);

    this.greeting = "Hello world!";
}

// Any object created from Greetr has access to the methods and properties of EventEmitter's prototype and it's own prototypes -> only prototypes
// Greetr inherits from EventEmitter -> sets up prototype chain
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ": " + data);

    // Pass in a parameter
    this.emit("greet", data);
}

var greeter1 = new Greetr();

// Add a function to the greet type
greeter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data);
});

greeter1.greet("Michael");