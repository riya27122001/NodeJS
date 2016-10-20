var fs = require('fs');

fs.readFile(process.argv[2],function (err,data) {
	if(!err)
		{
			var str = data.toString();
			var strArray = str.split('\n');
			var n=strArray.length;
			console.log(n-1);

		}
});
