
var request = require('supertest');
var app = require('../app.js');

// it('should give more info', function(done) {
//     this.timeout(30000);

//     setTimeout(function () {
//      describe('GET /', function() {
//   it('should respond with: Welcome to CICD test node app!', function(done) {
//     request(app).get('/').expect('Welcome the to CICD test node app!', done);
//     console.log("test 1");
//   });
// });

//     }, 20000);
//  });

describe('GET /', function() {
  it('should respond with: Welcome to the new CICD test node app!', function(done) {
    request(app).get('/').expect('Welcome to the new CICD test node app!', done);
  });
});


