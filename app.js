var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server=http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/register',function(req,res){
  // console.log(a);
      var data=JSON.stringify(req.body);
      var user_data=JSON.parse(data);
      
      var user = new Parse.User();
      
      user.set("username",user_data.email);
        user.set("password",user_data.password);
        user.set("email",user_data.email);
        user.set("codeName",user_data.codename);
        user.set("realName",user_data.realname);
      
      user.signUp(null,{
          success: function(user) {
            // Hooray! Let them use the app now.
            var currentUser = Parse.User.current();
            res.send(currentUser.attributes);
            
          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            console.log("Error: " + error.code + " " + error.message);
          }
        }); 
    });


server.listen(3000);
module.exports = app;
