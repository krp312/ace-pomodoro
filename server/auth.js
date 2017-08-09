// const { app } = require('./index');

const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const basicStrategy = new BasicStrategy((username, password, callback) => {
  global.app.locals.knex
    .select()
    .from('users')
    .where({username})
    .then(rows => {
      if (rows.length !== 1) {
        return callback(null, false);
      }

      if (rows[0].password === password) {
        return callback(null, rows[0]);
      }
      else {
        return callback(null, false);
      }
    })
    .catch(error => callback(error));
});

// 'config' steps
passport.use(basicStrategy);
let authenticator = passport.authenticate('basic', { session: false });

const passportMiddleware = passport.initialize();

module.exports = { authenticator, passportMiddleware };