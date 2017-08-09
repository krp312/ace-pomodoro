'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { authenticator } = require('../auth');

router.use(bodyParser.json());

// get sessions by user id (user id from req.user)
// router.get('/', authenticator, (req, res) => {
//   return req.app.locals.knex
//     .select()
//     .from('sessions')
//     .then(result => {
//       return res.status(200).json(result);
//     });
// });

// // Query single session from DB
// router.get('/:id', (req, res) => {
//   // What occurs in here depends on postgres data structure
//   return res.status(200).json({tagName: 'Postgres Study'});
// });

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
    .catch(error => {
      return res.status(500).send(error);
    });
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