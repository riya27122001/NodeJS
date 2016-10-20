http = require('http');
var data1=[];
http.get(process.argv[2],function (response) {
	response.setEncoding('utf8');
	response.on('end',function (end) {
		
			
			if (end) 
				{
					console.log(data1.length);
					console.log(data1);
				} 
			else 
				{
					response.on('data',function (data) {
						data1=data1+data;
					});
					
				}
		
	});
});