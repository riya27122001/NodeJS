var fs = require('fs');
var path = require('path');
var data = [];
module.exports = function (dir,extn,callback) {
	

	fs.readdir(dir,function (err,list) {
		if(err)
		 	callback(err);
		else{
			
			for (var i = 0; i < list.length; i++) 
				{if(path.extname(list[i])==('.'+extn))
									data[i]=list[i];}
			callback(err,data);
			
		}
	});
}