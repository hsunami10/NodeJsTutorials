var http = require("http");
var fs = require("fs");

// The function inside is an event listener (request, response - writable stream)
http.createServer(function (req, res) {
    // HTTP response starts in the head

    // status code, headers (name-value pairs)
    res.writeHead(200, {"Content-Type": "text/html"})

    // every chunk will be piped to the res stream
    var html = fs.createReadStream(__dirname + "/index.htm");

    // end means "I'm done sending, this is the last thing I'm sending"
    res.end(html);

// Choose which port incoming information is sent to
}).listen(1337, "127.0.0.1");