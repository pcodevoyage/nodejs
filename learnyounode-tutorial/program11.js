var http = require('http')
var fs = require('fs')

var port =parseInt(process.argv[2])
var filename = process.argv[3]

http.createServer(function(request, response) {

  var readStream = fs.createReadStream(filename)
  readStream.on('open',function(){
    readStream.pipe(response)
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.write("Hello World");
    // response.end();
  })
}).listen(port);
