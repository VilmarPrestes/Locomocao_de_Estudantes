const User = require('../models/userModel');
const { sendVerificationEmail } = require('../utils/emailUtils');

const registerUser = async (userData) => {
  // Verificação de domínio
  if (!userData.email.endsWith('@discente.ufg.br')) {
    throw new Error('Email deve ter o domínio @discente.ufg.br');
  }
  // Criar o usuário e gerar token
  const user = await User.create(userData);
  await sendVerificationEmail(user.email, user.token);
  return user;
};

const verifyToken = async (token) => {
  const user = await User.findOne({ where: { token } });
  if (!user) {
    throw new Error('Token inválido ou expirado');
  }
  return user;
};

module.exports = { registerUser, verifyToken };