const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verification Token',
    text: `Use o seguinte token para verificar sua conta: ${token}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail de verificação enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar o e-mail de verificação:', error);
    throw new Error('Não foi possível enviar o e-mail de verificação');
  }
};

module.exports = { sendVerificationEmail };
