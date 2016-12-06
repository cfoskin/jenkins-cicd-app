
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('should respond with: Welcome to thgjghghje ghg CICD test node app!', function(done) {
    request(app).get('/').expect('Welcome to the new CICD test node app!', done);
  console.log('test1')});
});


