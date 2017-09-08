var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var rfs = require('rotating-file-stream');

//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//日志
function pad(num) {
    return (num > 9 ? "" : "0") + num;
}
function generator(time, index){
    if(! time)
        return "file.log";
    var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
    var day = pad(time.getDate());
    var hour = pad(time.getHours());
    var minute = pad(time.getMinutes());
    return "/storage/" + month + "/" + month +
        day + "-" + hour + minute + "-" + index + "-file.log";
}
var rfs    = require('rotating-file-stream');
var stream = rfs(generator, {
    size:     '10M',
    interval: '1d'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
logger.token('from', function(req, res){ //http://127.0.0.1:3000/hello?from=app
    return req.query.from || '-';
});
logger.format('calvin', '[calvin] :method :url :status :from');
//app.use(logger('calvin',{stream: accessLogStream}));
app.use(logger('calvin',{stream: stream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
