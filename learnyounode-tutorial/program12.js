var http = require('http')
var fs = require('fs')
var map = require('through2-map')

var port =parseInt(process.argv[2])
var filename = process.argv[3]

http.createServer(function(request, response) {
  request.pipe(map(function(str){
    return str.toString().toUpperCase()
  })).pipe(response)
}).listen(port);

//node program12.js 8888
//curl -d "this is test" http://localhost:8888
