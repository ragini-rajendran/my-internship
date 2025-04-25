const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const config = require('../config/config'); // Assuming you'll have email configuration here

// Configure email transporter (you might want to move this to config.js)
const emailTransporter = nodemailer.createTransport({
  service: config.emailService, // e.g., 'Gmail'
  auth: {
    user: config.emailUser,
    pass: config.emailPassword,
  },
});

exports.sendEmail = async (to, subject, body) => {
  try {
    const mailOptions = {
      from: config.emailFrom,
      to: to,
      subject: subject,
      html: body, // You can use HTML in your email body
    };

    const info = await emailTransporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

exports.sendWebhookNotification = async (url, message) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      console.error('Webhook request failed:', response.status, response.statusText);
      return false;
    }

    console.log('Webhook notification sent successfully to:', url);
    return true;
  } catch (error) {
    console.error('Error sending webhook notification:', error);
    return false;
  }
};

exports.sendNotification = async (type, destination, message) => {
  switch (type) {
    case 'email':
      return this.sendEmail(destination, 'Task Notification', message);
    case 'webhook':
      return this.sendWebhookNotification(destination, { message });
    default:
      console.log(`Unsupported notification type: ${type}`);
      return false;
  }
};