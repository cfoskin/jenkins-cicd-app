var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('should respond with: Welcome to CICD test node app!', function(done) {
f3jk
    request(app).get('/').expect('Welcome the to CICD test nfewjlode apfe3ohi34p!', done);
  });
});