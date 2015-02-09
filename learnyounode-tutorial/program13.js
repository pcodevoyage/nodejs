var http = require('http')
var url = require('url')

var port =parseInt(process.argv[2])

function parsetime(time){
  return{
    hour : time.getHours(),
    minute : time.getMinutes(),
    second : time.getSeconds()
  }
}

function unixtime(time){
  return {
    unixtime : time.getTime()
  }
}

var server = http.createServer(function(req,res){
  var parseUrl = url.parse(req.url,true)
  var time = new Date(parseUrl.query.iso)
  var result

  if(/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if(result){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify(result))
  }else{
    res.writeHead(404)
    res.end()
  }

}).listen(port)
