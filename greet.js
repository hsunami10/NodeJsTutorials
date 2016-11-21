// First module
// A module is a part of a larger program

// Code inside module is protected, so variables and functions not in the scope of other programs
// ***BUT*** to allow other programs to expose objects...
module.exports = greet;

var greet = function() {
    console.log("Hello!");
};
greet();