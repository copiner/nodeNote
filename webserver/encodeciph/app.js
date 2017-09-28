var cryp = require('./crypto.js');

var ciph = {
    alg: 'des-ede3',    //3des-ecb
    autoPad: true,
    key: 'abcdefgh00000000abcdefgh',
    plaintext: '18658563053',
    iv: null
}
var deciph = {
    alg: 'des-ede3',    //3des-ecb
    autoPad: true,
    key: 'abcdefgh00000000abcdefgh',
    plaintext: 'CXQWZA/NB641RN5dYDCNAw==',
    iv: null
}

var ciphtxt = cryp.encrypt(ciph);
var deciphtxt = cryp.decrypt(deciph);
console.log(ciphtxt);//CXQWZA/NB641RN5dYDCNAw==
console.log(deciphtxt);//18658563053

var b = new Buffer('CXQWZA/NB641RN5dYDCNAw==', 'base64')
var s = b.toString();
console.log(s);//td[][]...
var ecode = encodeURI(s);//encodeURI
console.log(ecode);//%09t%16d%0F%EF%BF%BD%07%EF%BF%BD5D%EF%BF%BD%5D%600%EF%BF%BD%03;
var code = decodeURI(ecode);
console.log(code);//td[][]...
var base = code.toString("base64");
console.log(base);

// var ph = new Buffer('18658563053');
// var phs = ph.toString('base64');
// console.log("phs : "+phs);
// var ba = new Buffer(phs, 'base64')
// var phone = ba.toString();
// console.log(phone);
