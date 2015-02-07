var filterFn = require('./program6a.js')

var dir = process.argv[2]
var extention = process.argv[3]

filterFn(dir, extention, function(err,list){
  if(err)
    return console.error("there was an error")

  list.forEach(function(file){
    console.log(file)
  })
})
