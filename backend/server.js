const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'https://bukhosomhlahlo2portfolio.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],  // Ensure OPTIONS is included for preflight requests
  allowedHeaders: ['Content-Type'],
  credentials: true,  // if your frontend needs to pass credentials
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Setup body parser middleware to handle form data and json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// Email configuration and transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Ensure these are correctly set in your environment
    pass: process.env.EMAIL_PASS
  }
});


app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission - Portfolio',
    html: 
      `<h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: "Error sending email" });
    }
    res.status(200).json({ success: true, message: "Message Sent Successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();

// // CORS setup
// const corsOptions = {
//   origin: 'https://bukhosomhlahlo2portfolio.vercel.app', // Update with your Vercel URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// };
// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions)); // Enable preflight requests for all routes
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 4000;

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Verify email transporter
// transporter.verify((error) => {
//   if (error) {
//     console.log("Error verifying email transporter:", error);
//   } else {
//     console.log("Email transporter is ready to send emails");
//   }
// });

// app.post('/send-email', (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   const name = `${firstName} ${lastName}`;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: `Contact Form Submission - Portfolio`,
//     html: `
//       <h3>New Contact Form Submission</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   };

//   transporter.sendMail(mailOptions, (error) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ success: false, message: "Error sending email" });
//     }
//     res.status(200).json({ success: true, message: "Message Sent Successfully" });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
