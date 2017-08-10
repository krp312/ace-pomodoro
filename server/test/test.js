const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

const { app, runServer, closeServer } = require('../index');

chai.use(chaiHttp);

describe('Ace Pomodoro', function() {
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
    it('/api/sessions/ should get all sessions', function() {
      return chai.request(app)
        .get('/api/sessions')
        .then(result => {
          console.log(result.body);
        });
    });
  });
});