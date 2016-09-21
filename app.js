var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Welcome to CICD test bihgih node app!');
  console.log("push 2");
});
 
app.listen(process.env.PORT || 3000);
 
module.exports = app;
