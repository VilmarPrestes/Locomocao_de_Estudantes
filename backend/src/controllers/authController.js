const authService = require('../services/authService');

const registerUser = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyToken = async (req, res) => {
  try {
    const user = await authService.verifyToken(req.body.token);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, verifyToken };
