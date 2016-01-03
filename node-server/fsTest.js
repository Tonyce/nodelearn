var fs = require('fs');
fs.readdir('.', function (err, files) {
	if (err)
		throw err;
	for (var index in files) {
		console.log(files[index]);
	}
 });

// fs.readFile('./test.txt', function (err, data) {
//   	if (err) throw err;
//   	console.log(data.toString());
// });

var stats = fs.statSync("./test.txt")
console.log(stats)