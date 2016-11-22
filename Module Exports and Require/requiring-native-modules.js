// Native/core modules are global
// require() can be used to pull in core modules built into node.js

// Grab the built in utilities module
var util = require("util");

var name = "Michael";
var greeting = util.format("Hello %s", name);
util.log(greeting);