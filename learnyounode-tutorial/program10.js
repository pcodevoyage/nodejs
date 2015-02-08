var net = require('net');
var strftime = require('strftime')

var port =parseInt(process.argv[2])

var server = net.createServer(function(c) { //'connection' listener


  var dStr = strftime('%Y-%m-%d %H:%M')
  c.end(dStr+"\n")
  // console.log('client connected' + dStr);
  // c.on('end', function() {
  //   console.log('client disconnected');
  // });
  // c.write('hello\r\n');
  // c.pipe(c);
});
server.listen(port, function() { //'listening' listener
  console.log('server bound');
});
