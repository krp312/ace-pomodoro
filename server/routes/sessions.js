

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { authenticator } = require('../auth');

router.use(bodyParser.json());

// get sessions by user id
router.get('/', authenticator, (req, res) => {
  return req.app.locals.knex
    .select()
    .from('sessions')
    .where('sessions.user_id', req.user.id)
    .innerJoin('users', 'sessions.user_id', 'users.id')
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => res.status(500).send(err));
});

// increment on completed intervals
router.get('/:id', (req, res) => {
  let incrementor;
  return req.app.locals.knex
    .select()
    .from('sessions')
    .where( { id: req.params.id } )
    .then(result => {
      incrementor = result[0].completed_intervals;

      return req.app.locals.knex
        .select()
        .from('sessions')
        .where( { id: req.params.id } )
        .update( { completed_intervals: ++incrementor } )
        .returning(['id', 'name', 'completed_intervals']);
    })
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => res.status(500).send(err));
});

// Create a new session in DB 
router.post('/', authenticator, (req, res) => {
  const requiredFields = ['name', 'work_duration', 'break_duration'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let { name, work_duration, break_duration } = req.body;

  return req.app.locals.knex
    .insert({ 
      name,
      work_duration,
      break_duration,
      user_id: req.user.id
    })
    .into('sessions')
    .returning([
      'id',
      'modified', 
      'name', 
      'work_duration', 
      'break_duration', 
      'completed_intervals', 
      'total_work_time', 
      'total_break_time', 
      'user_id'
    ])
    .then(result => {
      return res.status(201).json(result);
    })
    .catch(err => res.status(500).send(err));
});

// // Alter session data - should require auth
// router.put('/:id', (req, res) => {
//   return res.status(204).json({tagName: 'Super Fun Postgres Study'});
// });

// // Delete session data - require auth
// router.delete('/:id', (req, res) => {
//   return res.status(204).end();
// });

module.exports = router;