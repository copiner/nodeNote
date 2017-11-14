
var http = require('http')
var fs = require('fs')

http.createServer(function(request, response){
    var wmv = 'vedio.wmv';
    var stat = fs.statSync(wmv);

    response.writeHead(200, {
        'Content-Type': 'video/wmv',
        'Accept-Ranges' : 'bytes'
        //'Content-Length': stat.size
    })

    var readableStream = fs.createReadStream(wmv);
    readableStream.on('close', function() {
      response.end();
      console.log("Stream finished.");
    });
    readableStream.pipe(response);
}).listen(3000)
