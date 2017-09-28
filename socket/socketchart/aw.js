
var express = require('express');
var app = express();
var path = require('path');

// var app = require('express')();

app.get('/', function(req, res){
  res.render('/view/index.html');
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// var http = require('http');
// http.createServer(app).listen(3000, function(){
//   console.log('listening on *:3000');
// })

//var http = require('http').Server(app);
var http = require('http').createServer(app);
http.listen(3000, function(){
  console.log('listening on *:3000');
});

var io = require('socket.io')(http);
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
