var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function(req, res){
    var url = req.url;
    url = url.split('?')[0];
    // console.log(url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (url === '/') {
        res.write(fs.readFileSync('./tpl/index.html'));
        res.end();
    } else if (url === '/form') {
        var data = '';
        req.on('data', function(chunk){
            // 如果传输数据比较大，这里要做buffer拼接
            data = chunk;
        });
        req.on('end', function(){
            var params = qs.parse(data.toString('utf-8'));
            var pStr = JSON.stringify(params);
            res.write(fs.readFileSync('./tpl/form.html', {encoding: 'utf-8'}).replace(/{{params}}/g, pStr));
            res.end();
        });
    }
}).listen(3000);
