// Greeting in English

// Get data from the .json file -> gets properties en and es
var greetings = require("./greetings.json");

var greet = function() {
    console.log(greetings.en);
}

module.exports = greet;