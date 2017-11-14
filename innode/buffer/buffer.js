var string,string2,string3;
var bufstr,bufstr2,bufstr3;
var j;

console.time('write 100 string')
for(j=0;j<1000;j++){
	var x = j+'';
	string += x;
}
console.timeEnd('write 100 string')

console.time('write 100 buffer')
bufstr = Buffer.alloc(100)
for(j=0;j<100;j++){
	var x = j+'';
	bufstr.write(x,j);
}
console.timeEnd('write 100 buffer')


console.time('write 100000 string')
for(j=0;j<100000;j++){
	var x = j+'';
	string2 += x;
}
console.timeEnd('write 100000 string')

console.time('write 100000 buffer')
bufstr2 = Buffer.alloc(100000)
for(j=0;j<100000;j++){
	var x = j+'';
	bufstr2.write(x,j);
}
console.timeEnd('write 100000 buffer')

console.time('write 1024*1024*10 string')
for(j=0;j<1024*1024*10;j++){
	var x = j+'';
	string3 += x;
}
console.timeEnd('write 1024*1024*10 string')

console.time('write 1024*1024*10 buffer')
bufstr3 = Buffer.alloc(1024*1024*10)
for(j=0;j<1024*1024*10;j++){
	var x = j+'';
	bufstr3.write(x,j);
}
console.timeEnd('write 1024*1024*10 buffer')
