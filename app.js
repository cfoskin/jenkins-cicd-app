var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Welcome the to CICD test node app the!');
});
 
app.listen(process.env.PORT || 3000);
 
module.exports = app;
