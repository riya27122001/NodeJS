var net = require('net');
var date = new Date();
var month, day, hours, minutes;

	

var server = net.createServer(function (socket) {
	
	var year = date.getFullYear();
	if((parseInt(date.getMonth()))+1<10)
		month='0'+(parseInt(date.getMonth())+1).toString();
	else
		month=(parseInt(date.getMonth())+1).toString();
	if(date.getDate()<10)
		day='0'+date.getDate();
	else
		day=date.getDate();
	if(date.getHours()<10)
		hours='0'+date.getHours();
	else
		hours=date.getHours();
	if(date.getMinutes()<10)
		minutes='0'+date.getMinutes();
	else
		minutes=date.getMinutes();
	data=year+'-'+month+'-'+day+' '+hours+':'+minutes+'\n';
	socket.end(data);

});
server.listen(process.argv[2]);