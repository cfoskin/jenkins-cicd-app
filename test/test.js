var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
	  	  this.timeout(5009846773);

  it('should respond with: Welcome to CICD test node app!', function(done) {

    request(app).get('/').expect('Welcome to CICD test node app!', done);
  });
});