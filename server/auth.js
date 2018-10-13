const bcrypt = require('bcryptjs');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./config');

const localStrategy = new LocalStrategy((username, password, callback) => {
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

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    algorithms: ['HS256']
  },
  (payload, done) => {
    done(null, payload.user);
  }
);

module.exports = { localStrategy, jwtStrategy };