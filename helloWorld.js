var http = require('http'),
	host = '127.0.0.1',
	port = '9000';

var server = http.createServer(function(req,res){
	res.end('<h1>Hello World</h1>');
}).listen(port,host,function(){
	console.log('Shubham yo ;) this is the port'+host);
});