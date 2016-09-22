var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Welcome to CICD test node app!');
=======
  res.send('Welcome the to CICD test node app!');
>>>>>>> master
});
 
app.listen(process.env.PORT || 3000);
 
module.exports = app;
