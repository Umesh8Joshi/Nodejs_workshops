// program to print all the file present in directory passed in first argument

var fs = require('fs');
var filePath = process.argv[2];
var extension = process.argv[3];
var returnList = [];

fs.readdir(filePath, function callback(err, list){
	if(err){return err}
	for(var i = 0 ; i < list.length;i++){
		if(list[i].includes(extension) && list[i].includes('.')){
			returnList.push(list[i])
		}
	}
	for(var i = 0; i < returnList.length; i++){
		console.log(returnList[i])
	}
})

/*
	var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/