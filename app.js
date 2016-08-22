var express = require('express');
var http = require("http")
var path = require('path');
var config = require('config');

var favicon = require('serve-favicon');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var log = require('libs/log')(module);




var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || config.get('port'));


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//Middleware

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser());
app.use(cookieParser());

//app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next){
  res.render("index",{
    title: '<b>Hello</b>'
  });
})


http.createServer(app).listen(app.get('port'), function(){
  //console.log("Express server listening on port " + app.get('port'))

  log.info("Express server listening on port " + app.get('port'))
});



//
//var path = require('path');


//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//
//// uncomment after placing your favicon in /public
////

//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;


//app.use(function(req, res, next){
//
//  res.status(404).send( "Page not found ...");
//});
//
//app.use(function(req, res, next){
//  if (req.url == '/error') {
//   // BLABLABLA();
//    next(new Error("wops, denied"));
//  } else {
//    next();
//  }
//});
//
//app.use(function(err, req, res, next){
//  if (app.get('env') == 'development') {
//     //var errorHandler = express.errorHandler();
//     // errorHandler(err, req, res, next);
//    res.send("500");
//
//
//    //res.render('error', {
//    //  message: err.message,
//    //  error: err
//    //});
//
//
//  } else {
//    res.send(500);
//  }
//});

//
//
//app.use(function(req, res, next){
//  if (req.url == '/') {
//    res.end("Hello");
//  } else {
//    next();
//  }
//
//});
//
//
//app.use(function(req, res, next){
//  if (req.url == '/test') {
//    res.end("test hello");
//  } else {
//    next();
//  }
//});

