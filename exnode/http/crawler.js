var http = require('http');
var url = "http://www.w3school.com.cn/index.html";
var cheerio = require('cheerio');

function filterIt(html){
  var $ = cheerio.load(html);
  var nav = $('h2');
  var data = [];
  //console.log(nav);
  nav.each(function(item){
    var it = $(this);
    //data.push(it);
    var title = it.text();
     data.push(title);
  })
  console.log(data);
}
http.get(url, function(res){
  var html = '';
  res.on('data', function(data){
    html += data;
  });
  res.on('end', function(){
    filterIt(html);
  })
}).on('error', function(){
  console.log('something error!')
})
