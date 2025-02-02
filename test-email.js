require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: 'Test Email',
    text: 'Hello, this is a test email from Nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('❌ Error sending email:', error);
    } else {
        console.log('✅ Email sent successfully:', info.response);
    }
});

