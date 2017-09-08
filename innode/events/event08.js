
//By default, event listeners are invoked in the order they are added.
//The emitter.prependListener() method can be used as an alternative to add the event listener to the beginning of the listeners array.

const MyEmitter = require('events');

const myEmitter = new MyEmitter();


myEmitter.once('foo', () => console.log('a'));

myEmitter.prependOnceListener('foo', () => console.log('b'));


myEmitter.emit('foo');

myEmitter.emit('foo');
