var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to the new CICD test node app!');
});

app.listen(process.env.PORT || 3000);
module.exports = app;
