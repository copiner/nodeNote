var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server,
wss = new WebSocketServer({ port: 8081 });

var uuid = require('node-uuid');
var flag = 0;

wss.on('connection', function (ws){
    console.log('client connected');
    ws.on('message', function (message){
        console.log(JSON.parse(message));
        if(ws.readyState === WebSocket.OPEN){
            //console.log(flag);
            comming(ws);
         }
    });
});

function comming(ws){
  var suuid = uuid.v4();
  if(flag < 5){
    flag++ ;
    ws.send(JSON.stringify({
        "uuid": suuid
    }));
  }
}
