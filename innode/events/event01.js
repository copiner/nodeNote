
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this);
// });
// myEmitter.emit('event', 'a', 'b');

myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
});
myEmitter.emit('event', 'c', 'd');
