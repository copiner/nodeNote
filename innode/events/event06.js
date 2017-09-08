//Class: EventEmitter

//The EventEmitter class is defined and exposed by the events module:
//All EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener' when existing listeners are removed.

const MyEmitter = require('events');

const myEmitter = new MyEmitter();


myEmitter.once('removeListener', () => {
    myEmitter.on('event', () => {
      console.log('B');
    });
});


myEmitter.on('event', () => {
  console.log('A');
});

myEmitter.emit('event');

// Prints:
//   A
