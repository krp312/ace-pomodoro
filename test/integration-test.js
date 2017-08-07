'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');

const should = chai.should();

const {app, runServer, closeServer} = require('../index');

chai.use(chaiHttp);

// How do we tear down db using Knex?

function tearDownDb() {
  console.warn('Deleting database');
}

describe('Sessions API resource', function() {
  it('should pass', function() {
    true.should.equal(true);
  });
  // it('Should get all sessions', function() {
  //   let res;
  //   return chai.request(app)
  //     .get('/api/session')
  //     .then(function(_res){
  //       res=_res;
  //       res.should.have.status(200);
  //       res.should.be.json;
  //     });
  });
});

describe('Users API resource', function() {
  it('should pass', function() {
    true.should.equal(true);
  });

  
});