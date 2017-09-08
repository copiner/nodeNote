//事件驱动
function click(e){
  console.log('Button is clicked');
}

var button = document.getElementById('#button');

button.addEventListener('click', click);
