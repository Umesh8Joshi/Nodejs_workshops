// reading file and returning number of lines by using async IO of node

var fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath, function callback(err, data){
	if(err){return err}
	var str = data.toString()
	console.log(str.split('\n').length -1)
})