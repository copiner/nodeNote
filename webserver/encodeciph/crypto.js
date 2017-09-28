var crypto = require('crypto');

// exports.des = function(param) {
//     var key = new Buffer(param.key);
//     var iv = new Buffer(param.iv ? param.iv : 0)
//     var plaintext = param.plaintext
//     var alg = param.alg
//     var autoPad = param.autoPad
//
//     //encrypt
//     var cipher = crypto.createCipheriv(alg, key, iv);
//     cipher.setAutoPadding(autoPad)  //default true
//     var ciph = cipher.update(plaintext, 'utf8', 'base64');
//     ciph += cipher.final('base64');
//     console.log(alg, ciph)
//
//     //decrypt
//     var decipher = crypto.createDecipheriv(alg, key, iv);
//     cipher.setAutoPadding(autoPad)
//     var txt = decipher.update(ciph, 'base64', 'utf8');
//     txt += decipher.final('utf8');
//     console.log(alg, txt);
// }

exports.encrypt = function(param) {
    var key = new Buffer(param.key);
    var iv = new Buffer(param.iv ? param.iv : 0)
    var plaintext = param.plaintext
    var alg = param.alg
    var autoPad = param.autoPad

    //encrypt
    var cipher = crypto.createCipheriv(alg, key, iv);
    cipher.setAutoPadding(autoPad)  //default true
    var txt = cipher.update(plaintext, 'utf8', 'base64');
    //ciph += cipher.update(plaintext, 'hex', 'utf8');
    txt += cipher.final('base64');
    return txt;
}

exports.decrypt = function(param){
    var key = new Buffer(param.key);
    var iv = new Buffer(param.iv ? param.iv : 0)
    var plaintext = param.plaintext
    var alg = param.alg
    var autoPad = param.autoPad;

    //decrypt
    var decipher = crypto.createDecipheriv(alg, key, iv);
    decipher.setAutoPadding(autoPad)
    var txt = decipher.update(plaintext, 'base64', 'utf8');
    txt += decipher.final('utf8');
    return txt;
};
