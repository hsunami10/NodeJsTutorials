// require() is a function that takes in a string that contains the location of the module to import
// require returns module.exports/what is exposed

// Look inside the greet folder for index.js
var greet = require("./greet");

greet.english();
greet.spanish();