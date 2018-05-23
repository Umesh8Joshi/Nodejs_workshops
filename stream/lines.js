var through = require('through');
var split = require('split');

var alt = function(odd_func, even_func){
	var f = even_func;
	return function (buffer){
		f = (f === even_func) ? odd_func : even_func
		f.call(this, buffer)
	}
}

var enque_after = function (string_func){
	return function(buffer){
		var value = string_func.call(buffer.toString()) + '\n'
		this.queue(value)
	}
}

process.stdin.pipe(split()).pipe(through(alt(enque_after(String.prototype.toLowerCase),
	enque_after(String.prototype.toUpperCase)))).pipe(process.stdout)

/*
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
*/