
var length=4;
var arr=[];

(function iterator(i){

if(i <= length){
  arr.push(i);
  return;
}

iterator(i+1);

})(0);

console.log(arr);
