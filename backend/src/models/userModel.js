const pool = require('../config/db');

const createUser = async (email, password) => {
  try {
    const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);
    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { createUser, getUserByEmail };
