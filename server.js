var express = require('express');
var server = express();

server.get('/', function(req,res){
	res.send('<h1>Handling HTTP Request with ExpressJS</h1>');
});


server.listen(8080);
console.log('server started on port 8080, check your browser');

