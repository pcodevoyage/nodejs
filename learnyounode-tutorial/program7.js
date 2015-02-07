var http = require('http')

var site=process.argv[2]

http.get(site, function(res){
  res.setEncoding('utf8')
  res.on("data",function(data){
    console.log(data)
  })
  
  res.on("error",function(data){
    console.log(data)
  })

}).on('error', function(e){
  console.log("Gor error : "+ e.message)
})




// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
