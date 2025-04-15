require('dotenv').config();
const sendEmail = require('../src/services/email-service');
const sgMail = require('@sendgrid/mail');

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn(),
}));

describe('SendGrid Email Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email successfully', async () => {
    sgMail.send.mockResolvedValue({ response: 'Email sent' });

    const recipientEmail = 'example@example.com';
    const subject = 'Integration Test Email';
    const text = 'This is a test email sent using SendGrid.';

    await sendEmail(recipientEmail, subject, text);

    expect(sgMail.send).toHaveBeenCalledWith({
      to: recipientEmail,
      from: process.env.EMAIL_FROM,
      subject: subject,
      text: text,
    });
  });
});
