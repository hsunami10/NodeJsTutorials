// Fifth pattern
// Revealing module pattern -> exposing only properties and methods wanted via a returned object

var greeting = "Hello world!!!!";

function greet() {
    console.log(greeting);
}

// Set module.exports as an object with a property greet
// Only revealed the greet function
module.exports = {
    greet: greet
}