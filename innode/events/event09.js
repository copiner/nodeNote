

//removeAllListeners
//removeListener

const MyEmitter = require('events');

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('001');
});
myEmitter.on('event', () => {
  console.log('002');
});


myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});

myEmitter.removeAllListeners('foo');

myEmitter.emit('foo');
myEmitter.emit('event');

const server = new MyEmitter();

var callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);

//server.removeListener('connection', callback);

server.emit('connection');
