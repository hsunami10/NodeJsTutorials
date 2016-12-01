/*
    Let's the programmer change what the this keyword points to
    Difference between call and apply:
        if the function has a parameter
            call: after {name: ""}, add a , parameter
            apply: after {name: ""}, add an , array of parameters [parameter]
*/

var obj = {
    name: "Michael Hsu",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

obj.greet();

// Use .call -> when it sees "this", instead of pointing to name: "Michael Hsu", it'll point to name: "John Doe"
obj.greet.call({name: "John Doe"});
obj.greet.apply({name: "Jane Doe"});