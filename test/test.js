var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('should respond with: Welcome to  new branch  push 1 CICD test node app!', function(done) {

    request(app).get('/').expect('Welcome to CICD test node app!', done);
  });
});