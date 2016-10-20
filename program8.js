var async = require('async')
var bl = require('bl');
var http = require('http');
async.waterfall([
function f1() {
		http.get(process.argv[2],function (response) {
		response.pipe(bl(function (err,data) {
			if(err)
				return console.error(err);
			data1= data.toString();
			
			console.log(data1);

		}));
		
	});
},
function f2() {
		http.get(process.argv[3],function (response) {
		response.pipe(bl(function (err,data) {
			if(err)
				return console.error(err);
			data1= data.toString();
			
			console.log(data2);

		}));
		
	});
},
function f3() {
		http.get(process.argv[4],function (response) {
		response.pipe(bl(function (err,data) {
			if(err)
				return console.error(err);
			data1= data.toString();
			
			console.log(data3);

		}));
		
	});
}
]);

