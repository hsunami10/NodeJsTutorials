var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-Type": "application/json"})
    var obj = {
        firstname: "John",
        lastname: "Doe"
    };

    // Serialize obj, which is deserialized by the browser
    res.end(JSON.stringify(obj));

}).listen(1337, "127.0.0.1");