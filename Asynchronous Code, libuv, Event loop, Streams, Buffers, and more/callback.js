// Callback example -> usually passing a function into a function

// Passes in a function, then runs the function once the original one finishes
function greet(callback) {
    console.log("HellO");

    var data = {
        name: "Michael Hsu"
    };
    callback(data);
}

greet(function(data) {
    console.log("The callback was invoked!");
    console.log(data);
});

greet(function(data) {
    console.log("A different callback was invoked!");
    console.log(data.name);
});