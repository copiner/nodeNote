var http = require("http");
var somedata = {username:"root", password:"123456"};
var clientdata = JSON.stringify(somedata);

var opt = {
    host:'localhost',
    port:'3000',
    method:'POST',
    path:'/users/post',
    headers:{
        "Content-Type": 'application/json',
        "Content-Length": clientdata.length
    }
}

var req = http.request(opt, (res) =>{
    console.log("res : " + res.statusCode);
    res.setEncoding('utf8');
    res.on('data',(data) => {
        console.log(data);
    }).on('end', () => {
        console.log("No more data in response");
    });
}).on('error', (e)=> {
    console.log("error: " + e.message);
})

//写入数据，完成发送
req.write(clientdata);
req.end();
