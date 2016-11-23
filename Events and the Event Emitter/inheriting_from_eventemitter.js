// Example of inheriting from the event emitter

var EventEmitter = require("events");
var util = require("util");

function Greetr() {
    this.greeting = "Hello world!";
}

// Any object created from Greetr has access to the methods and properties of EventEmitter's prototype and it's own prototypes
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