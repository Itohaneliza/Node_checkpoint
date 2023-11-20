// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter using your SMTP settings
const transporter = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
        user: 'clintonfaraday@gmail.com',
        pass: 'Habeeb4@',
    },
});

// Email details
const mailOptions = {
    from: 'clintonfaraday@gmail.com',
    to: 'faradazali@gmail.com.com',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email from Node.js!',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
