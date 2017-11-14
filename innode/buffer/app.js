var buf = Buffer.from('nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4');
console.time('string += buf')
var s = '';
for(var i=0;i<100;i++){
	s += buf;
}
console.log(s);
console.timeEnd('string += buf')


console.time('buf concat')
var list = [];
var len=0;
for(var i=0;i<100;i++){
	list.push(buf);
	len += buf.length;
}
var s2 = Buffer.concat(list, len).toString();
console.log(s2);
console.timeEnd('buf concat')
