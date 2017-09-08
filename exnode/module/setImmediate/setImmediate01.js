

setImmediate(function(){
    console.log("setImmediate");
});
process.nextTick(function(){
    console.log("nextTick")
});

console.log("1");
console.log("2");
console.log("3");

// process.nextTick()的回调函数执行的优先级要高于setImmediate();
