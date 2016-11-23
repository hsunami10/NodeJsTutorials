var Emitter = require("./emitter-part1");

var emtr = new Emitter();

// Adding functions to the array 
emtr.on("greet", function() {
    console.log("Listener: somewhere someone said hello");
});

emtr.on("greet", function() {
    console.log("Listener: a greeting occurred");
});

console.log("Hello");
emtr.emit("greet");