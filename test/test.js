
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('Welcome to the CICD new test node app!', function(done) {
    request(app).get('/').expect('Welcome to the CICD new test node app!', done);
});


