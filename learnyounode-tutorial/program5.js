// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt.
// Note that the second argument will not come prefixed with a '.'.

var fs = require('fs')
var file = process.argv[2]
var extention = process.argv[3]

function listFiles(callback) {
  fs.readdir(file, function (err, contents) {
    if(err)
      return callback(err)

    var a =[]
    var m=0
    for ( i=0; i < contents.length; i++){
      if (contents[i].search(extention) > 0){
        a[m] = contents[i]
        m=m+1
        console.log(contents[i])
      }
    }
    callback(null,a)
})
}

function logIt(e, a){
  console.log(a)
}

listFiles(logIt)
// var fs = require('fs')
//     var path = require('path')
//
//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })
