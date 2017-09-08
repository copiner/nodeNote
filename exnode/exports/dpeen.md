https://github.com/chyingp/nodejs-learning-guide
https://nodejs.org/en/docs/
http://expressjs.com/en/guide/routing.html

其实，Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是Module.exports本身不具备任何属性和方法。如果，Module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。


如果你想你的模块是一个特定的类型就用Module.exports。如果你想的模块是一个典型的`实例化对象`就用exports。
