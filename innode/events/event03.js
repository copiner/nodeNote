
//Handling events only once
//When a listener is registered using the eventEmitter.on() method, that listener will be invoked every time the named event is emitted.
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
var m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');//  1
myEmitter.emit('event');//  2

//Using the eventEmitter.once() method, it is possible to register a listener that is called at most once for a particular event.
//Once the event is emitted, the listener is unregistered and then called.

var n = 0;
myEmitter.once('once', () => {
  console.log(++n);
});
myEmitter.emit('once'); //  1
myEmitter.emit('once'); // Ignored
