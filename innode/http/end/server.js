var http = require('http');
var qs = require('querystring');
http.createServer(function (req, res) {
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        //res.writeHead(200);
        console.log('got name : ' + qs.parse(body).name);
        res.end('Done');
    });
}).listen(3000);
