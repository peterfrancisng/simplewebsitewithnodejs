var http = require('http');
var server = http.createServer(function(req,res) {
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write('<h1>I am a fullstack JavaScript Developer</h1>\n');
	res.end();
	});
server.listen(8080);
console.log('server started on port 8080, check your browser');

