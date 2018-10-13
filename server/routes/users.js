const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localAuth = passport.authenticate('local', {session: false});
router.use(bodyParser.json());

// Create new user
router.post('/', (req, res) => {
  let { username, password } = req.body;
  let hashedPassword;

  const requiredFields = ['username', 'password'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);

  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  username = username.trim();
  password = password.trim();

  bcrypt.hash(password, 10)
    .then(result => {
      hashedPassword = result;

      return req.app.locals.knex
        .insert({
          username,
          password: hashedPassword
        })
        .into('users')
        .returning(['username', 'password']);
    })
    .then(() => {
      res.status(201).json({ message: 'user create success' });
    })
    .catch(error => {
      res.status(500).json({ message: 'error creating user' });
    });
});

router.post('/login', localAuth, (req, res) => {
  return res.json({ message: 'login successful' });
});

module.exports = router;