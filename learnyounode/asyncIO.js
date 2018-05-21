// reading file and returning number of lines by using async IO of node

var fs = require('fs')
var len = undefined

function numLine(){
	fs.readFile(process.argv[2], function donenumLine(err, lines){
		len = donenumLine.toString().split('\n').length - 1
	})
}
numLine()
console.log(len)