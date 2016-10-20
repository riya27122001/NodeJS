var http = require('http');
http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8');
	response.on('error',function (error) {
		return console.error(error);
	});
	response.on('data',function (data) {
		data1=data.split('\n');
		for (var i = 0; i < data1.length; i++) {
			console.log(data1[i]);
		}
	});
});