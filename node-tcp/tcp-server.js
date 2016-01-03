var net = require('net');
var redis = require('redis')
	client = redis.createClient();
var socketArr = []
var server = net.createServer(function(c) { //'connection' listener
	// RPUSH mylist "one"
	console.log("c",c)
	// console.log(typeof c)
	// client.LPUSH("sockets", c)
	socketArr.push(c)
	// var firstC = client.LPOP("sockets")
	console.log('client connected');

	c.on('end', function() {
		console.log('client disconnected');
	});
	c.on('data', function(data) {
		console.log(data.toString())
	})
	// if(firstC){
	// 	console.log(typeof firstC)
	// 	// firstC.write("this by seconde")
	// }

	// for (var i = 0; i < socketArr.length; i++) {
	// 	var otherC = socketArr[i]
	// 	if(otherC != c){
	// 		otherC.write("by other")
	// 		otherC.pipe(otherC)
	// 	}
	// };

	c.write('hello\r\n');
	c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
	console.log('server bound');
});