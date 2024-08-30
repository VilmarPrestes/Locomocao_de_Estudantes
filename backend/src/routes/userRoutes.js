const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../services/emailService');
const pool = require('../config/db');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    await pool.query('INSERT INTO users (email, password, token) VALUES ($1, $2, $3)', [email, hashedPassword, token]);

    await sendVerificationEmail(email, token);

    res.status(201).json({ message: 'User registered, verification email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user.' });
  }
});

module.exports = router;
