var express = require("express");
var app = express();

// Set up port 
var port = process.env.PORT || 3000;

// Use static files
app.use('/assets', express.static(__dirname + '/public'));

// Set up template
app.set('view engine', 'ejs');

// Start server
app.listen(port);