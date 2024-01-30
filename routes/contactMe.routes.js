/** @format */

const router = require("express").Router();
const transporter = require("../config/mailer");

router.post("/portfolio", (req, res, next) => {
  const title = "<b>Hello World! <3</b>";
  const message =
    "<b>Yoo-hoo</b> <p>Someone has viewed your 3D portfolio!💪🎉</p>";

  async function sendMail() {
    try {
      const info = await transporter.sendMail({
        from: `"Portfolio Bot 🤖" <${process.env.EMAIL_ADDRESS}>`, // sender address
        to: `alexandra.vasinova@gmail.com`, // list of receivers
        subject: "Portfolio Viewed ✔", // Subject line
        text: "Hello world?", // plain text body
        html: message, // html body
      });

      console.log(`Message sent: `, info.messageId);
      res.setHeader(
        "Access-Control-Allow-Origin",
        "https://3-d-portfolio-psi-seven.vercel.app"
      );
      res.status(200).json("Sent :)");
    } catch (err) {
      console.error(`Error sending your email: `, err);
      res.status(500).json("Error sending your email... :(");
    }
  }

  sendMail();
});



router.post("/contact", (req, res, next) => {
  const { name, email, message } = req.body;

  const finalMessage = `<b><h2>Message from ${name}:</h2></b> <p>${message}</p> <br> <h3>Address:${email}</h3>`;

  // Check if the email or password or name is provided as an empty string
  if (email === "" || message === "" || name === "") {
    res.status(400).json({ message: "Provide email, name and message" });
    return;
  }

  // Use regex to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: "Provide a valid email address." });
    return;
  }

  async function sendMail() {
    try {
      const info = await transporter.sendMail({
        from: `Portfolio Bot 🤖<${process.env.EMAIL_ADDRESS}>`, // sender address
        to: `alexandra.vasinova@gmail.com`, // list of receivers
        subject: `Inquiry from ${name} ✔`, // Subject line
        text: "Hello world?", // plain text body
        html: finalMessage, // html body
      });
      const messageId = await info.messageId;

      console.log(`Message sent: `, messageId);
      res.setHeader(
        "Access-Control-Allow-Origin",
        "https://3-d-portfolio-psi-seven.vercel.app"
      );
      res.status(200).json("Thank you for reaching out! I will get back to you within 2 working days. :)");
    } catch (err) {
      console.error(`Error sending your email: `, err);
      res.status(500).json("Error sending your email... :(");
    }
  }

  sendMail();

});





module.exports = router;
