var bl = require('bl');
var http = require('http');
http.get(process.argv[2],function callback(response) {
	response.pipe(bl(function (err,data) {
		if(err)
			return console.error(err);
		data1= data.toString();
		console.log(data1.length);
		console.log(data1);

	}));
});