var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('Hello hello');
}).listen(8000, '127.0.0.1');

console.log('server running at localhost:8000');