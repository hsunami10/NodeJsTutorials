var http = require("http");
var fs = require("fs");

// Accept requests from browser (reloading), send responses
http.createServer(function (req, res) {

    // Routing: look at the url in the request, and choose different responses

    if(req.url === "/") {
        fs.createReadStream(__dirname + "/index.htm").pipe(res);
    }
    // If the url is localhost:1337/api
    else if(req.url === "/api") {

        // Header
        res.writeHead(200, {"Content-Type": "application/json"})
        var obj = {
            firstname: "John",
            lastname: "Doe"
        };

        // Serialize obj
        res.end(JSON.stringify(obj));
    }
    else {
        // Status code 404: not found
        res.writeHead(404);
        res.end();
    }

}).listen(1337, "127.0.0.1");