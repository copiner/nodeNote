每一个node.js执行文件，都自动创建一个module对象，同时，module对象会创建一个叫exports的属性，初始化的值是 {}
为了方便，模块中会有一个exports对象和module.exports指向同一块内存。所以初始状态下：

```
module.exports = {};
exports = {};
```

exports和module.exports指向同一块内存，但require()返回的是module.exports而不是exports。

```
var str = "difference"
exports.a = str;
exports.b = function () {

}
```
给 exports 赋值其实是给 module.exports 这个空对象添加了两个属性而已，因为此时exports和module.exports指向同一块内存，上面的代码相当于：
```
var str = "difference"
module.exports.a = str;
module.exports.b = function () {

}
```

###使用exports

app.js
```
var s = require("./log");
s.log("hello");
```

log.js
```
exports.log = function (str) {
    console.log(str);
}
```
```
require("./log")返回的是module.exports，此时由log.js有
module.exports.log = function (str) {
    console.log(str);
}
```

###使用module.exports

app.js
```
var s = require("./log");
s.log("hello");
```

log.js
```
module.exports.log = function (str) {
    console.log(str);
}
```

### 再看下面的例子

app.js
```
var x = require('./log');

console.log(x.a); //2
```

log.js
```
module.exports = {a: 2}
exports.a = 1
```
module.exports通过赋值方式已经和exports对象指向的内存不同了，exports对象的修改不会影响到module.exports对象了。


 - [workshop](https://github.com/copiner/workshop) - A workshop to learn the basics of node.
