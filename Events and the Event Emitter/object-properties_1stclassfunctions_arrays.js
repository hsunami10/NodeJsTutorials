// To understand event emitter

// object properties and methods
var obj = {
    greet: "Hello"
}
console.log(obj.greet);
console.log(obj["greet"]);
var prop = "greet";
console.log(obj[prop]);

// functions and arrays
var arr = [];

// use push to add an element to the arrays
arr.push(function () {
    console.log("Hello world 1");
});
arr.push(function () {
    console.log("Hello world 2");
});
arr.push(function () {
    console.log("Hello world 3");
});

// For each loop for arrays: call the argument for every element
// item is each element in the array
arr.forEach(function(item) {
    item();
});