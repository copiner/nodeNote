//node非阻塞，单线程，事件驱动

//打印结果
var c = 0;
function print(){
  console.log(c);
}

//1
// function plus(){
//   c++;
// }

//2
// function plus(){
//   setTimeout(function(){
//     c++;
//   }, 1000)
// }

// plus();
// print();

//对比如下，打印出来'1'

var c = 0;
function print(){
  console.log(c);
}

function plus(callback){
  setTimeout(function(){
    c++;
    callback();
  }, 1000)
}
plus(print);
