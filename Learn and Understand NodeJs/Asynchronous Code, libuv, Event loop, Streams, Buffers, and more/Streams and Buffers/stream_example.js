// With greet.txt
var fs = require("fs");

/*
    Begin to read the file, then fill up the buffer with the contents
        if the contents are the same size or smaller than the buffer, then you get all the data
        if the contents are larger, it will fill up the buffer with pieces of the file
    emit a data event that'll invoke the listener
*/

// Read from greet.txt
// (path, options) - encoding, how much memory you want each chunk to be in bytes (32KB)
var readable = fs.createReadStream(__dirname + "/greet.txt", {encoding: "utf8", highWaterMark: 16 * 1024});

// Write to greetcopy.txt
var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

// Listens to the data event (since stream is an event emitter) -> runs it
// The variable "chunk" is the buffer
readable.on("data", function(chunk) {
    console.log(chunk.length);

    // With each chunk, writes it to the greetcopy.txt file
    writable.write(chunk);
});