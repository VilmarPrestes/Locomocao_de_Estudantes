const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendVerificationEmail = (to, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Verification Token',
    text: `Your verification token is: ${token}`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendVerificationEmail
};
