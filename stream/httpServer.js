var through = require('through');
var http = require('http')

var upper_case = function (buffer){
	this.queue(buffer.toString().toUpperCase())
}
var server = http.createServer(function(req,res){
	if(req.method == 'POST'){
		req.pipe(through(upper_case)).pipe(res)
	}
});
server.listen(process.argv[2]);