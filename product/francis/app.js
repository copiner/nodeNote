var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var sqlselect = require('./routes/sqlselect');
var sqlupdate = require('./routes/sqlupdate');
var sqldelete = require('./routes/sqldelete');
var sqlinsert = require('./routes/sqlinsert');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//console.log(path.join(__dirname, 'public'));
//http://localhost:3000/stylesheets/style.css


//Mount(If you mount a campaign or event, you organize it and make it take place)
//Mounts the specified middleware function or functions at the specified path:
//the middleware function is executed when the base of the requested path matches path.
app.use('/', routes);
app.use('/users', users);

app.use('/sqlselect', sqlselect);
app.use('/sqlinsert', sqlinsert);
app.use('/sqlupdate', sqlupdate);
app.use('/sqldelete', sqldelete);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
