'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Get all users from DB
router.get('/', (req, res) => {

});

// Query single user from DB
router.get('/:id', (req, res) => {

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
});