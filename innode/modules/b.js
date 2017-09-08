//Note that assignment to module.exports must be done immediately. `It cannot be done in any callbacks`.

const a = require('./a');
a.on('ready', () => {
  console.log('module a is ready');
});
