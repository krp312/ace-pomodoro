'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const knex = require('knex');

router.use(bodyParser.json());

// Get all users from DB
router.get('/', (req, res) => {
  // What occurs in here depends on postgres data structure
  
  return knex.select().from('users')
    .then(result => {
      return res.status(200).send(result);
    });
});

// Query single user from DB
router.get('/:id', (req, res) => {
  // What occurs in here depends on postgres data structure
  return res.status(200).json({name: 'bobby'});
});

// Create a new user in DB 
router.post('/', (req, res) => {
  const requiredFields = ['username', 'password', 'email'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let {username, password, email} = req.body;
  username = username.trim();
  password = password.trim();
  return res.status(201).json(req.body);
});

// Alter user data - should require auth
router.put('/:id', (req, res) => {
  return res.status(204).json({name: 'bobbed'});
});

// Delete user data - require auth
router.delete('/:id', (req, res) => {
  return res.status(204).end();
});

module.exports = router;