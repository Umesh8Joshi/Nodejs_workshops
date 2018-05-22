var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	try{
		var fp = fs.createReadStream(process.argv[3]);
		fp.pipe(res);
	}catch(er){
		consol.log(er.message);
	}
})
server.listen(process.argv[2]);