const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Ace Pomodoro', function() {
  before(function() {
  });

  after(function() {
  });

  describe('sanity tests', function () {
    it('true should equal true', function() {
      expect(true).to.be.true;
    });

    it('true should not equal false', function() {
      expect(true).to.not.be.false;
    });
  });
});