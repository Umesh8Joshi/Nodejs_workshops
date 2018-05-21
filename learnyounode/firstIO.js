// Program that will read file and print the number of newlines
var fs = require('fs')
buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
var a = str.split('\n')
console.log(a.length-1)

/*

    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/