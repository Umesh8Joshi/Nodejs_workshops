var through = require('through');

var upper_case = function(buffer){
	this.queue(buffer.toString().toUpperCase())
}

process.stdin.pipe(through(upper_case)).pipe(process.stdout)