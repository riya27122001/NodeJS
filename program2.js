var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strArray = str.split('\n');
var n = strArray.length;

console.log(n-1);