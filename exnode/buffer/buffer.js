
var b = new Buffer(10000);

var s = "chinese is ok";

b.write(s);
console.log(b.length);
console.log(Buffer.ByteLength(s));

