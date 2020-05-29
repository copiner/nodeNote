//node inspect a.js
global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('you');


//npm install -g ndb
