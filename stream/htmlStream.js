var trumpet = require('trumpet')
var through = require('through')

var upper_case = function (buffer){
	this.queue(buffer.toString().toUpperCase())
}

var tr = trumpet()
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select('.loud').createStream()
stream.pipe(through(upper_case)).pipe(stream)