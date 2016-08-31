var http = require('http');
http.createServer(function(req, res) {
    //console.log('here: ', req, res);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8100, '127.0.0.1');

console.log('Http server running on http://127.0.0.1:8100');