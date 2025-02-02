require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Allow frontend requests
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route to Send Email
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: subject,
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Email sending failed', details: error.message });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

