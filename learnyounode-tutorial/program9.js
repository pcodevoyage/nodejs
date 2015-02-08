// var http = require('http')
// var bl = require('bl')
// var async = require('async')
//
// var sites=[]
// sites[0]=process.argv[2]
// sites[1]=process.argv[3]
// sites[2]=process.argv[4]
//
// var result=[]
// var x =0
//
// async.each(sites,
//   function(site,callback){
//     http.get(site, function(res){
//       // console.log(site)
//       res.setEncoding('utf8')
//       res.pipe(bl(function(err,data){
//           if(err)
//             return console.error(err)
//
//           data = data.toString()
//           // console.log(data)
//           result[x]=data
//           x++
//           console.log(x)
//           callback()
//         }))
//     });
//   },
//   function(err){
//     console.log(err)
//   });
//
//
// for(j=0;j<result.length;j++)
//   console.log(result[j])

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
