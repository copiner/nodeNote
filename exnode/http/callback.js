function learn(something){
  console.log(something);
}

function fun(callback, something){
  something += ' is nice';
  callback(something);
}

//fun(learn, 'copiner');

fun(function(something){
  console.log(something)
}, 'xiao')
