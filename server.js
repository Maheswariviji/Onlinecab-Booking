 
var logger = require('morgan');
var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// user schema/model
var User = require('./models/user.js');

//Database
var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

var auth =  require('./routes/auth');
var movieCrud = require('./routes/movie-crud');

//anytimecab
var cityCrud = require('./routes/addcity-crud');
var carCrud = require('./routes/cartype-crud');
var mapCrud = require('./routes/mappingcarcity');
var Location = require('./routes/addloc');
var driver = require('./routes/driver-crud');
var cabbooking = require('./routes/booking-crud');
 
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.json());

app.use('/movie', movieCrud);
app.use('/car', carCrud);
app.use('/map', mapCrud);
app.use('/user/', auth);
app.use('/city',cityCrud);
app.use('/loc',Location);
app.use('/der',driver);
app.use('/bk',cabbooking);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});




// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});








