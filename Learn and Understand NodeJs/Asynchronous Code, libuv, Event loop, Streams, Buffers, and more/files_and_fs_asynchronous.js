/*
    With greet.txt
    fs = File System -> lower end programming
    keep code running in V8, while OS is running in the background (that's what readFile is doing)
*/

var fs = require("fs");

// Asynchronous 
// Event loop: request to read file, then once the file has been read, run the callback
var greet2 = fs.readFile(__dirname + "/greet.txt", "utf8",  
// Error first callback
function(err, data) {
    console.log(data);
});

// V8 runs this while readFile was being executed, so this one runs first
console.log("Done!");