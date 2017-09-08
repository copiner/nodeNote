//Class: EventEmitter

//The EventEmitter class is defined and exposed by the events module:
//All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when existing listeners are removed.

const MyEmitter = require('events');

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');

// Prints:
//   B
//   A
