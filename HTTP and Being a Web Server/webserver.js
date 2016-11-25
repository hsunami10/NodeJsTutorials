var http = require("http");
var fs = require("fs");

// The function inside is an event listener (request, response - stream where the response from the server will be streamed back)
http.createServer(function (req, res) {
    // HTTP response starts in the head

    // status code, headers (name-value pairs)
    res.writeHead(200, {"Content-Type": "text/html"})

    // Get contents of html file -> decode into string w/ utf8
    var html = fs.readFileSync(__dirname + "/index.htm", "utf8");

    var message = "Hello world...";
    html = html.replace("{Message}", message);

    // end means "I'm done sending, this is the last thing I'm sending"
    res.end(html);

// Choose which port incoming information is sent to
}).listen(1337, "127.0.0.1");