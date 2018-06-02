var pug = require('pug')
var express = require('express')
var path = require('path')
var app = express()

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.get('/home', function(req, res){
	res.render(process.argv[3], {date: new Date().toDateString()})
})
app.listen(process.argv[2])