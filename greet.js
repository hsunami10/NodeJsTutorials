// First module
// A module is a part of a larger program

var greet = function() {
    console.log("Hello!");
};

// Code inside module is protected, so variables and functions are not in the scope of other programs
// ***BUT*** to allow other programs to be able to see the objects...
module.exports = greet;