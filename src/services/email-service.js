const sgMail = require('@sendgrid/mail');

const sendEmail = async (recipientEmail, subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: recipientEmail,
    from: process.env.EMAIL_FROM,
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
