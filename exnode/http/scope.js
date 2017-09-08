
//作用域
var globalVaribale = "This is global variable";

function globalFunction(){
  var localVaribale = "This is local variable";

  console.log('Visit global/local variable');
  console.log(globalVaribale);
  console.log(localVaribale);
}
globalFunction();
