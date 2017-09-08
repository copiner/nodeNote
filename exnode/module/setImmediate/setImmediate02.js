
process.nextTick(function(){
    console.log("nextTick")
});

setImmediate(function(){
    console.log("setImmediate");
});


console.log("1");
console.log("2");
console.log("3");
