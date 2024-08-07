// // // server.js

// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();

// // // CORS setup to allow requests from your frontend URL (replace with your actual frontend URL)
// // app.use((req, res, next) => {
// //   res.setHeader('Access-Control-Allow-Origin', 'https://bukhosomhlahlo4portfolio.netlify.app');
// //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// //   next();
// // });

// // const corsOptions = {
// //   origin: 'http://localhost:3000', // Update with your frontend URL during development
// //   methods: ['POST'],
// //   allowedHeaders: ['Content-Type']
// // };

// // app.use(cors(corsOptions));
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // const PORT = process.env.PORT || 4000;

// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS
// //   }
// // });

// // transporter.verify((error) => {
// //   if (error) {
// //     console.log("Error verifying email transporter:", error);
// //   } else {
// //     console.log("Email transporter is ready to send emails");
// //   }
// // });

// // app.post('/send-email', (req, res) => {
// //   console.log("Received request to /send-email"); // Logging for debugging
// //   const { firstName, lastName, email, phone, message } = req.body;
// //   const name = `${firstName} ${lastName}`;

// //   const mailOptions = {
// //     from: email,
// //     to: process.env.EMAIL_USER,
// //     subject: `Contact Form Submission - Portfolio`,
// //     html: `
// //       <h3>New Contact Form Submission</h3>
// //       <p><strong>Name:</strong> ${name}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Phone:</strong> ${phone}</p>
// //       <p><strong>Message:</strong> ${message}</p>
// //     `,
// //   };

// //   transporter.sendMail(mailOptions, (error) => {
// //     if (error) {
// //       console.error('Error sending email:', error);
// //       return res.status(500).json({ success: false, message: "Error sending email" });
// //     }
// //     res.status(200).json({ success: true, message: "Message Sent Successfully" });
// //   });
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// // // Error handling for unhandled promises
// // process.on('unhandledRejection', (reason, promise) => {
// //   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// //   // Application specific logging, throwing an error, or other logic here
// // });
// const cors = require('cors');
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();

// // Set up CORS to allow requests from your Netlify domain
// app.use(cors({
//   origin: 'https://bukhosomhlahlo2portfolio.netlify.app', // Your Netlify URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type']
// }));

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
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS setup
const corsOptions = {
  origin: 'https://bukhosomhlahlo2portfolio.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email transporter
transporter.verify((error) => {
  if (error) {
    console.log("Error verifying email transporter:", error);
  } else {
    console.log("Email transporter is ready to send emails");
  }
});

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission - Portfolio`,
    html: `
      <h3>New Contact Form Submission</h3>
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
