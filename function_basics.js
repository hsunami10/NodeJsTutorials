var a = 1;
var b = 2;
var c = a + b;

console.log(c)

// function statement
function greet() {
    console.log("HI");
}
greet();

// functions are first class -> use it like a variable
// pass in a function, then call it
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// Function expression -> act like variables
var greetMe = function() {
    console.log("Hi Michael!");
}
greetMe();

logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function() {
    console.log("Hello function on the fly");
});

// Examples
var addTwo = function(num) {
    console.log(num + 2);
}
var five = 5;
addTwo(five);
/* or (do the same thing) */
function add2(num) {
    console.log(num + 2);
}
add2(five);