var http = require("http")
var url  = require("url")
var fs   = require("fs")

http.createServer(function (req, res) {
	var requestUri = url.parse(req.url, true);
	var path = requestUri['pathname']
		path = path.split("/")

	console.log(path)
	// var headers = req.headers
	var method  = req.method

	// console.log( requestUri, method)
	// console.log(req.headers)
	if (path[1] == "upload" && method == "POST") {
		// req.setEncoding("utf8")
		var fileName = path[2]
		console.log(fileName)
		var writer = fs.createWriteStream(fileName)
		var str = ""
		req.on("data", function (chunk) {
			str += chunk
		})
		req.pipe(writer)
		req.on("end", function () {
			// console.log("str",str)
		  	res.writeHead(200, {'Content-Type': 'text/plain'});
		  	res.end('Hello World\n');			
		})
	}else {
		fs.readFile('./temp.html', function (err, data) {
			if (err) {
				res.writeHead(500, {'Content-Type': 'text/plain'});
				res.end('server error:' + err );
				return
			}
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
		
	}
	

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');