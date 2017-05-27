'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({res: 'GET / ', message: 'Hello World!'});
});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
