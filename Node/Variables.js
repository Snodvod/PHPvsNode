// Normal vars

var a = "Variable A";
var b = 9;

//arrays

var array = ['Jos', 'Guido', 'Bertje'];

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	// array is printed out normally
	res.end(a + " " + b + "\n" + array);
}).listen(8000);

console.log('server running at localhost:8000');