var http = require('http')
var bl = require('bl')

var site=process.argv[2]

http.get(site, function(res){
  res.setEncoding('utf8')
  res.pipe(bl(function(err,data){
      if(err)
        return console.error(err)

      data = data.toString()
      console.log(data.length)
      console.log(data)
      // for(i=0;i<data.length;i++)
      // {
      //   console.log(data[i].length)
      //   console.log(data[i].toString())
      // }
  }))

}).on('error', function(e){
  console.log("Gor error : "+ e.message)
})
