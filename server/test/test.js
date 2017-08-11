const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const { app, runServer, closeServer } = require('../index');

chai.use(chaiHttp);

describe('Ace Pomodoro', function() {
  console.log('before is here'),
  before(function() {
    runServer();
  });

  after(function() {
    closeServer();
  });

  describe('sanity tests', function () {
    it('true should equal true', function() {
      expect(true).to.be.true;
    });

    it('true should not equal false', function() {
      expect(true).to.not.be.false;
    });
  });

  describe('sessions endpoints', function() {
    it.only('should not access sessions without auth', function() {
      return chai.request(app)
        .get('/api/sessions')
        .then(function(res) {
          res.should.have.status(401);
        });
    // it.only('/api/sessions/ should get all sessions', function() {
    // return chai.request(app)
    //   .get('/api/sessions')
    //   .then(result => {
    //     console.log(result.body);
    //   });
    });
  });


// 'use strict';

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const faker = require('faker');

// const should = chai.should();

// const {app, runServer, closeServer} = require('../index');

// chai.use(chaiHttp);

// // How do we tear down db using Knex?

// function tearDownDb() {
//   console.warn('Deleting database');
// }

// describe('Sessions API resource', function() {
//   it('should pass', function() {
//     true.should.equal(true);
//   });
//   // it('Should get all sessions', function() {
//   //   let res;
//   //   return chai.request(app)
//   //     .get('/api/session')
//   //     .then(function(_res){
//   //       res=_res;
//   //       res.should.have.status(200);
//   //       res.should.be.json;
//   //     });
//   });
// });

describe('Users API resource', function() {
  const newUser = {
    username: 'testuser',
    password: 'testpassword'
  };

  const expectedKeys = ['username', 'password'];

  it.only('should add a new user on POST', function() {
    return chai.request(app)
      .post('/api/users/')
      .send(newUser)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.all.keys(expectedKeys);
        res.body.username.should.equal(newUser.username);
        res.body.password.should.not.equal(newUser.password);
      });

  });
});