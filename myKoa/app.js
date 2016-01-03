
"use strict"

var http = require('http')

http.createServer(function (req, res) {
	res.end("hello world")
}).listen(3000, function () {
	console.log("-------")
})

// const Koa = require('koa');
// const app = new Koa();
// // logger
// // 
// app.use(ctx => {
// 	ctx.body = 'Hello World';
// });
// app.listen(3000);

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
  // res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

// app.use((ctx, next) => {
// 	console.log(`href: ${ctx.request.href}`)
//   	const start = new Date;
//   	return next().then(() => {
//   		let time = new Date().getTime()
//   		console.log(`href: ${time}`)
//   		ctx.body += `href: ${time}`; 
//    		const ms = new Date - start;
//     	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   	});
// });

// app.use((ctx, next) => {
// 	console.log(`headers: ${ctx.request.headers}`)
//   	const start = new Date;
//   	return next().then(() => {
//   		let time = new Date().getTime()
//   		console.log(`headers: ${time}`)
//   		ctx.body += `headers: ${time}`; 
//    		const ms = new Date - start;
//     	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//   	});
// });

// router.get('/main',
//  	(ctx, next) => {
//  		console.log(`main...`)
//  		return next().then(()=>{
//  			ctx.body += "main";
//  		})
// });

// app.use(router.routes())
// // 	.use(router.allowedMethods());

// // response

// app.use(ctx => {
// 	ctx.body = 'Hello World';
// });

// app.listen(3000);

