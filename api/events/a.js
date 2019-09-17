
var events = require("events");

var  myEmitter = new events.EventEmitter();

myEmitter.on("come",function(msg){
    console.log(msg);
})

myEmitter.emit("come", "happey new year");

