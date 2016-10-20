var express = require('express');
var app = express();
//handling get req for home page
app.get('/',function (err,res) {
	res.send("Hello");
});
//handling get req for /what page
app.get('/what',function (err,res) {
	res.send("Hello what");
});
//handling post req for home page
app.post('/',function (err,res) {
	res.send("This is a post request");
});

//Creating server

app.listen('3000',function () {
	console.log("Created the server")
});
