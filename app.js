var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 

// const express = require('express');
const {
  exec
} = require('child_process');
// const app = express();
// const port = process.env.PORT || 3000
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false
}))
app.get('/' , (req , res)=>{
 res.sendFile(__dirname+ '/index.html') 
})
app.get('/mail',(req , res)=>{
  res.sendFile(__dirname+'/email.html')
})
app.post('/new-message', (req, res) => {
  let email = req.body.email;
  let msg = req.body.message;

  exec(`python ${__dirname}/email-bridge.py ${email} ${msg}`, (err, stdout) => {
      if (err) {
          console.log(err);
          return
      }
      console.log(stdout)
  })
})
// 
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
