// With greet.txt
var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/greet.txt");

// Destination: greetcopy.txt
var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

// Sets up a pipe and sends data from readable to writable
readable.pipe(writable);

/*
    Duplex stream example
*/

var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");

// gzip -> an algorithm for compressing files
// Creates a duplex stream
var gzip = zlib.createGzip();

// Since .pipe(gzip) also returns a readable stream, another pipe can be added
readable.pipe(gzip).pipe(compressed);