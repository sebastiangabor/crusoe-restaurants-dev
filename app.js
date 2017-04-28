var express = require('express');
var app = express();
var config = require ('./config');
var mongoose = require('mongoose');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.set ('view engine', 'ejs')

app.use ('/', express.static(__dirname + '/public'));

app.use ('/', function (req,res,next) {
  console.log ('Requested URL: ' + req.url);
  next();
});

apiController(app);

mongoose.connect(config.getDbConnectionString());

app.listen(port);
