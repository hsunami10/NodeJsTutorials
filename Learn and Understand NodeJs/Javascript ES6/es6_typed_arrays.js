// This has nothing to do with node, just an example of a new feature in V8 engine

// A byte is 8 bits -> takes the size of the array in bytes
var buffer = new ArrayBuffer(8);

// Deal with data -> can only store 2 integers in the view -> converts those numbers into 32-bit numbers
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
console.log(view);