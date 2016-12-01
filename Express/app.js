// Use express

var express = require("express");
var app = express();

// Use middleware - declare and use static files
app.use("/public", express.static(__dirname + "/public"));

// Install template
// Automatically look inside "views" folder
//app.set('view engine', 'ejs');

// Create custom middleware
app.use("/", function(req, res, next) {
    console.log("Request URL: " + req.url);

    // Move to next middleware
    next();
});

// Environment variable -> default port 3000
var port = process.env.PORT || 3000;

// get request -> request data - middleware
app.get("/", function(req, res) {
    res.send("<html><head><link href=public/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>");
});

// Output whatever is after /person/ -> routing with variables
app.get("/person/:id", function(req, res) {
    res.send("<html><body><h1>Person: " + req.params.id + "</h1></body></html>");
});

app.get("/api", function(req, res) {
    res.json({firstname: "John", lastname: "Doe"});
});

// Start the web server
app.listen(port);