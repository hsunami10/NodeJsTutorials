// Use node js event emitter -> in events.js
var Emitter = require("events");
var eventConfig = require("./config").events;

var emtr = new Emitter();

// Adding functions to the array 
emtr.on(eventConfig.GREET, function() {
    console.log("Listener: somewhere someone said hello");
});

emtr.on(eventConfig.GREET, function() {
    console.log("Listener: a greeting occurred");
});

console.log("Hello");
emtr.emit(eventConfig.GREET);