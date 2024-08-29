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
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Verification Token',
    text: `Use o seguinte token para verificar sua conta: ${token}`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
