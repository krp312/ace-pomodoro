const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { authenticator } = require('../auth');

router.use(bodyParser.json());

// get sessions by user id
<<<<<<< HEAD
// return completed intervals count here
// return only one instance of the same session id
// completed intervals by day, week, and month
router.get('/', authenticator, (req, res) => {
=======
// router.get('/', authenticator, (req, res) => {
router.get('/',  (req, res) => {
>>>>>>> features/frontend
  return req.app.locals.knex
    .select()
    .from('sessions')
    .where('sessions.user_id', 15)
    .innerJoin('users', 'sessions.user_id', 'users.id')
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => res.status(500).send(err));
});

// Create a new session in DB 
router.post('/', authenticator, (req, res) => {
  const requiredFields = ['name', 'work_duration', 'break_duration', 'is_completed'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let { name, work_duration, break_duration, is_completed } = req.body;

  return req.app.locals.knex
    .insert({ 
      name,
      work_duration,
      break_duration,
      is_completed,
      user_id: req.user.id
    })
    .into('sessions')
    .returning([
      'id',
      'modified', 
      'name', 
      'work_duration', 
      'break_duration', 
      'is_completed', 
      'total_work_time', 
      'total_break_time', 
      'user_id'
    ])
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;