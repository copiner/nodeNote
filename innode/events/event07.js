
const MyEmitter = require('events');

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {});
myEmitter.on('event', () => {});

//Alias for emitter.on(eventName, listener).
myEmitter.addListener('event', () => {})

myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});


myEmitter.setMaxListeners(12)

console.log(myEmitter.listenerCount('event'));
console.log(myEmitter.getMaxListeners('event'));

console.log(myEmitter.eventNames());

console.log(myEmitter.listeners('event'));
