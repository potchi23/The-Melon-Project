const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');

const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config');

const url = config.mongoUrl;

const mongooseOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify : false, 
    useCreateIndex : true 
};

const connect = mongoose.connect(url, mongooseOptions);

connect.then((db) => {
    console.log('Connected to server');
}, (err) => { console.log(err) });

const app = express();

app.all('*', (req, res, next) => {
    if(req.secure){
        return next();
    }
    else{
        res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));


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
