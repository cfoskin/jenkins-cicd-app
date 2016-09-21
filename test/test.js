var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('should respond with: Welcome to CICD test node app!', function(done) {

    request(app).get('/').expect('Welcome the to CICD test n fjkbhjkode app!', done);
  });
});