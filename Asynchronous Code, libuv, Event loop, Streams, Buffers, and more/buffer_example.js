// data, enconding -> encode "Hello" in utf8 encoding
var buf = new Buffer("Hello", "utf8");

console.log(buf);
console.log(buf.toString());

// Convert to JSON
console.log(buf.toJSON());

// Buffer works like an array
console.log(buf[2]);

// Write data -> overwrite data to the buffer (replaces because it's supposed to hold a finite set of data)
buf.write("wo");
console.log(buf.toString());