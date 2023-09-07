/** @format */

const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "https://mail-server-5cbw.vercel.app",
//   service: "hotmail",
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// module.exports = transporter;



let transporter;

if (process.env.NODE_ENV === "production") {
  
  transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // Use the appropriate SMTP server
    port: 587, // Use the appropriate port for your SMTP server
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
} else {
  
  transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

module.exports = transporter;