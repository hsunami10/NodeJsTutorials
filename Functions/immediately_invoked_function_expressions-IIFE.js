/*
    Immediately Invoked Function Expression (IIFE) -> when
    you want to run the function immediatly after the declaration
*/

var firstname = "Bobby";

// Wrapping in parentheses tell the engine that it's an expression'
(function(lastname) {

    // Not in the scope of anything outside of the function
    var firstname = "Michael";
    console.log(firstname);
    console.log(lastname);

})("Hsu");

console.log(firstname);