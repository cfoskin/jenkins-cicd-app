var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Welcome to CICD test node app!');
});
 
app.listen(process.env.PORT || 3000);
 
module.exports = app;
console.log("Server started on port 3000")