const express = require('express');
require('dotenv').config();
const User = require('../models/User');

const router = express.Router();

/** ------------------------GET ALL USERS------------------------------ */
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('_id  name age');
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

/** ------------------------GET USER'S COINS------------------------------ */
router.post('/add-user', async (req, res) => {
  try {
    const body = {
      name: req.body.name,
      age: req.body.age,
    };
    const newUser = await User.create(body);
    return res.status(200).json({ user: newUser, msg: 'User created!' });
  } catch (error) {
    return res.status(500).json({ message: 'Something is wrong!' });
  }
});

module.exports = router;
