// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require('dotenv').config(); // If you're using environment variables

// // Create Express app
// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000', // Your React app's URL
//   methods: ['POST'],
//   allowedHeaders: ['Content-Type']
// }));
// app.use(express.json());
// app.use("/", router);

// // Set up port
// const PORT = process.env.PORT || 3000;

// // Email transporter setup
// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER || "somhlahlobs@gmail.com",
//     pass: process.env.EMAIL_PASS || "yrjhv eznl tabm mlvw"
//   },
// });

// // Verify email transporter
// contactEmail.verify((error) => {
//   if (error) {
//     console.log("Error verifying email transporter:", error);
//   } else {
//     console.log("Email transporter is ready to send emails");
//   }
// });

// // Contact route
// router.post("/contact", (req, res) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   const name = `${firstName} ${lastName}`;

//   const mail = {
//     from: name,
//     to: "somhlahlobukho4@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `
//       <h3>New Contact Form Submission</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, message: "Error sending email" });
//     } else {
//       res.status(200).json({ success: true, message: "Message Sent Successfully" });
//     }
//   });
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Error handling for unhandled promises
// process.on('unhandledRejection', (reason, promise) => {
//   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
//   // Application specific logging, throwing an error, or other logic here
// });

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use("/", router);

// Set up port
const PORT = process.env.PORT || 3000;

// Email transporter setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "somhlahlobs@gmail.com",
    pass: process.env.EMAIL_PASS || "rjhv eznl tabm mlvw"
  },
});

// Verify email transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying email transporter:", error);
  } else {
    console.log("Email transporter is ready to send emails");
  }
});

// Contact route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: "your-email@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: "Error sending email" });
    } else {
      res.status(200).json({ success: true, message: "Message Sent Successfully" });
    }
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Error handling for unhandled promises
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});
