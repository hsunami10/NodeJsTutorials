var greet = require("./greet1");
greet();

// require is an object
var greet2 = require("./greet2").greet;
// greet2 now contains module.exports & is an object
greet2();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "Changed hello world!";

// greet3.greeting changes the greeting for greet3b
var greet3b = require("./greet3");
greet3b.greet();

// greet4 is a function constructor
var greet4 = require("./greet4");
var grtr = new greet4();
grtr.greet();

// greet5 is the function greet
var greet5 = require("./greet5").greet;
greet5();