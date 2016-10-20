var module = require('./module.js');
module(process.argv[2],process.argv[3],function (err1,data1) {
	if(err1)
		{
			return console.error(err1);
			console.log("Could not read file!");
		}
	else
		for (var i = 0; i < data1.length; i++) {
			
				console.log(data1[i]);
		}	
});