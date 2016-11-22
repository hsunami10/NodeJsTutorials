// Fourth pattern

function Greetr() {
    this.greeting = "Hello World!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

// Gives module.exports the ability to create a new object
// module.exports is now the function constructor
module.exports = Greetr;