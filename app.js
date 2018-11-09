var createError = require('http-errors');
var flash = require('connect-flash');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
// var passportConfig = require('./config/passport')(passport);
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
require('dotenv').load();
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var socket_io    = require( "socket.io" );
var todoRouter = require('./routes/todoRouter');
var usersRouter = require('./routes/userRouter');
var bookkeepingRouter = require('./routes/bookkeepingRouter');
var passportRouter = require('./routes/passportRouter');

// app.set('view engine', 'ejs');

// Socket.io
var io           = socket_io();
app.io           = io;
var socketRouter = require('./routes/socketRouter')(io);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(flash());
app.use(session({
  secret : "secret",
  saveUninitialized: true,
  resave: true
}));
// passport.initialize : middleware được gọi ở từng request,
// kiểm tra session lấy ra passport.user nếu chưa có thì tạo rỗng.
app.use(passport.initialize());

// passport.session: middleware sử dụng kịch bản Passport ,
// sử dụng session lấy thông tin user rồi gắn vào req.user.
app.use(passport.session());

// app.get('/OK', function (req, res) {
//   return res.json({status:'success'});
// });
app.get('/KO', function (req, res) {
  return res.sendStatus(401)
});


passportRouter(app);
bookkeepingRouter(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
