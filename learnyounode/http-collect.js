const bl = require('bl');
const http = require('http');

http.get(process.argv[2], function (res){
	res.pipe(bl(function (err,data){
		if(err) {return err};
		console.log(data.toString().length);
		console.log(data.toString());
	}));
}).on('error', console.error);

/*
	var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/