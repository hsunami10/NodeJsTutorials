// This folder holds different greetings in multiple languages

// Combine english and spanish greetings here
var english = require("./english");
var spanish = require("./spanish");

// Make it available to use as a complete module here -> module.exports is an object
module.exports = {
    english: english,
    spanish: spanish
};