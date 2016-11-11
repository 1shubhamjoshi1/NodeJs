var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';

var mimes = {
	'.html':'text/html',
	'.css':'text/css',
	'.js' : 'text/javascript'
}

var server = http.createServer(function(req,res){
	var filePath = (req.url === '/')?('./index.html'):('.'+req.url);
	var contentType = mimes[path.extname(filePath)];
	fs.exists(filePath,function(file_exists){
		if(file_exists)
		{
			fs.readFile(filePath,function(error,content)
				{
					if(error)
					{
						res.writeHead(500);
						res.end();
					}else {
						res.writeHead(200,{'Content-Type':'text/html'});
						res.end(content,"UTF-8");
					}
				});
		}else{
			res.writeHead(404);
			res.end("Sorry we could not find");
		}
	});
}).listen(port,host,function(){
	console.log('Server Running at '+host+":"+port);
});