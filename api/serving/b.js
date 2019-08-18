
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("request was made: "+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj = {};
    if(req.url === '/home' || req.url === '/'){
	obj = { email : 'wdaonngg@gmail.com' }
    }    
    if(req.url == '/api/orders'){
	obj = {
	    busi:'234567',
	    amount:'30.00'
	}
    }
    if(req.url == '/api/clients'){
	obj = {
	    name:'ds',
	    age:'18'
	}
    }

    res.end(JSON.stringify(obj));
});
server.listen(3000,'127.0.0.1',function(){
    console.log("listening at 3000");
});

