

process.nextTick(function(){
    console.log("nextTick001");
});
process.nextTick(function(){
    console.log("nextTick002");
});


setImmediate(function(){
    console.log("setImmediate001");
    process.nextTick(function(){
        console.log("nextTick003");
    });
});

setImmediate(function(){
    console.log("setImmediate002");
});

console.log("1");
console.log("2");
console.log("3");
