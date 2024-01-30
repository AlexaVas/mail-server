/** @format */

// const router = require("express").Router();
// const transporter = require("../config/mailer");


// router.post("/portfolio", (req, res, next) => {
//   const title = "<b>Hello World! <3</b>";
//   const message = "<b>Yoo-hoo</b> <p>Someone has viewed your portfolio!💪🎉</p>";

  
//   async function sendMail() {
    

//       try {
//         const info = await transporter.sendMail({
//           from: `"Portfolio Bot 🤖" <${process.env.EMAIL_ADDRESS}>`, // sender address
//           to: `alexandra.vasinova@gmail.com`, // list of receivers
//           subject: "Portfolio Viewed ✔", // Subject line
//           text: "Hello world?", // plain text body
//           html: message, // html body
//         });

//         console.log(`Message sent: `, info.messageId);
//         res.setHeader(
//           "Access-Control-Allow-Origin",
//           "https://alexavas.github.io"
//         );
//         res.status(200).json("Sent :)");
//       } catch (err) {
//         console.error(`Error sending your email: `, err);
//         res.status(500).json("Error sending your email... :(");
//       } 

//     }
  

//   sendMail();

  
// });

// module.exports = router;
