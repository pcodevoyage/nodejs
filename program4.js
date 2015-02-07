// Write a program that uses a single asynchronous filesystem
// operation to read a file and print the number of newlines
// it contains to the console (stdout), similar to running cat file | wc -l.
//
// The full path to the file to read will be provided as the
// first command-line argument.

var fs = require('fs')

//var buf = fs.readFileSync(process.argv[2])
var count = 0
function countFile(callback){
  fs.readFile(process.argv[2], function doneReading(err,fileContent){
    count = count + fileContent.toString().split('\n').length
    // console.log(fileContent)
    callback()
  });
}

function logIt(){
  console.log(count-1)
}

countFile(logIt)




// var fs = require('fs')
//     var file = process.argv[2]
//
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
