const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcryptjs');

const basicStrategy = new BasicStrategy((username, password, callback) => {
  let rows;

  global.app.locals.knex
    .select()
    .from('users')
    .where({username})
    .then(_rows => {
      rows = _rows;

      if (rows.length !== 1) {
        return callback(null, false);
      }

      return bcrypt.compare(password, rows[0].password);
    })
    .then(result => {
      if (result) {
        return callback(null, rows[0]);
      }
      else {
        return callback(null, false);
      }
    })
    .catch(error => callback(error));
});

passport.use(basicStrategy);
const passportMiddleware = passport.initialize();
const authenticator = passport.authenticate('basic', { session: false });

module.exports = { authenticator, passportMiddleware };