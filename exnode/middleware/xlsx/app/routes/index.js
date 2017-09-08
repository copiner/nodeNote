var express = require('express');
var router = express.Router();

var xlsx = require('node-xlsx');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET import excel test. */
router.get('/importExcel', function(req, res, next) {
  var obj = xlsx.parse('file/zhejiang.xlsx');//一个数组
  console.log(JSON.stringify(obj));
  console.log(obj[0].name);
  console.log(obj[0].data[0][0]);
  res.send('import successfully!');
});

/* GET export excel test. */
router.get('/exportExcel', function(req, res, next) {
  var data = [
    ["name","age","sex", "class"],
    ["francis", 12, 1, 5],
    ['Calvin', 13, 1, 6],
    ['Rose', 12, 0, 2]
  ];
  var buffer = xlsx.build([{name: "info", data: data}]);
  fs.writeFileSync('file/beijing.xlsx', buffer, 'binary');
  res.send('export successfully!');
});

module.exports = router;
