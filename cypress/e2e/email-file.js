const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // or your SMTP provider
    auth: {
      user: 'your.email@gmail.com',
      pass: 'yourEmailPassword'
    }
  });

  let info = await transporter.sendMail({
    from: '"Cypress Bot" <your.email@gmail.com>',
    to: 'recipient@example.com',
    subject: 'Downloaded File',
    text: 'Attached is the downloaded file.',
    attachments: [
      {
        filename: 'file.pdf',
        path: './cypress/downloads/file.pdf'
      }
    ]
  });

  console.log('Email sent:', info.messageId);
}

sendEmail();
