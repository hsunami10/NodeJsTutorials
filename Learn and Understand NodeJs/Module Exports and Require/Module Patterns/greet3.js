// Third pattern -> replace empty object (exports) with another object

// Constructor
function Greetr() {
    this.greeting = "Hello World!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}
module.exports = new Greetr();