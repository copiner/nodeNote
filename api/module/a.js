
var counter = function(arr){
    return "There are "+arr.length+" elements in this array";
}

var adder = function(a,b){
    return `The sum of the 2 nums is ${a+b}`;
}

var PI = 3.1415;

//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.PI = PI;
module.exports = {
    counter:counter,
    adder:adder,
    PI:PI
}
