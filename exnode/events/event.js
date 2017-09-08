
//事件模块
var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter;

//life.setMaxListeners(11);

life.on('hit', function(some){
   console.log('give ' + some + ' 01');
});

life.on('hit', function(some){
   console.log('give ' + some + ' 02');
});

life.on('clap', function(some){
   console.log('clap ' + some + ' 01');
});

//life.emit('hit', 'me');
//life.emit('pad', 'you');

//var hit = life.emit('hit', 'me');
//var pad = life.emit('pad', 'you');
//var play = life.emit('play', 'her');

//console.log(hit);
//console.log(pad);
//console.log(play); //false


//匿名函数不能移除
life.removeListener('hit', function(some){
   console.log('give ' + some + ' 02');
});

function add(some){
  console.log('give ' + some + ' 03');
}
life.on('hit', add);
//可以做到移除
//life.removeListener('hit', add);

life.emit('hit', 'me')

console.log(life.listeners('hit').length);
console.log(EventEmitter.listenerCount(life, 'hit'));

//移除所有事件
life.removeAllListeners();

//移除所有hit事件
life.removeAllListeners('hit');
