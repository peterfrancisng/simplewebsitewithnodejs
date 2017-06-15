var http = require('http');
var server = http.createServer();
server.listen(8080);

server.on('request',(req,res) => {
	
	res.write('Hello World!\n');
	setTimeout(() => {
		res.write('I am a fullstack JavaScript Developer\n');
		res.end();
	}, 3000);
	
});