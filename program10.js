var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req,res) {
	buf=fs.createReadStream(process.argv[3]);
	buf.pipe(res);
});
server.listen(process.argv[2]);