'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Get all sessions from DB
router.get('/', (req, res) => {
  // What occurs in here depends on postgres data structure
  return res.status(200).json();
});

// Query single session from DB
router.get('/:id', (req, res) => {
  // What occurs in here depends on postgres data structure
  return res.status(200).json({tagName: 'Postgres Study'});
});

// Create a new session in DB 
router.post('/', (req, res) => {
  // The requiredFields must match whatever is going to be produced by 
  // User form submission of a tag name on the front end
  const requiredFields = ['tagName'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  return res.status(201).json(req.body);
});

// Alter session data - should require auth
router.put('/:id', (req, res) => {
  return res.status(204).json({tagName: 'Super Fun Postgres Study'});
});

// Delete session data - require auth
router.delete('/:id', (req, res) => {
  return res.status(204).end();
});

module.exports = router;