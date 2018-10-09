


exports.b = 1

module.exports.c = 3;

//初始状态下 exports和module.exports指向同一块内存，
//但require()返回的是module.exports而不是exports。

//module.exports通过赋值方式已经和exports对象指向的内存不同了 即require()返回的是{a: 2}
module.exports = {a: 2}
