var request = require('supertest');
var app = require('../app.js');
<<<<<<< HEAD
 
describe('GET /', function() {
  it('should respond with: Welcome to  new branch  push 1 CICD test node app!', function(done) {
=======
>>>>>>> master

it('should give more info', function(done) {
    this.timeout(50000);

    setTimeout(function () {
     describe('GET /', function() {
  it('should respond with: Welcome to CICD test node app!', function(done) {
    request(app).get('/').expect('Welcome the to CICD test node app!', done);
    console.log("test 1");
  });
});

    }, 25000);
 });