// Objects -> a collection of name/value pairs
// Object literals -> name/value pairs separated by commas and surrounded by {} - to create an object efficiently

var person = {
    firstname: "Michael",
    lastname: "Hsu",
    greet: function() {
        console.log("Hello, " + this.firstname + " " + this.lastname);
    }
};

// Invoke person's greet method'
person.greet();

// Another way to invoke... object["properties"]
console.log(person["firstname"]);