const router = require("express").Router();
const transporter = require("../config/mailer");
const template = require("../templates/template");
const contactDetails = require("../db/contactDetails");

router.post("/send", (req,res,next)=> {

    const title = "<b>Hello World! <3</b>";
    const message = "<p>This is the body.</p>"
   
    const {contacts} = contactDetails;
    




contacts.forEach(contact => {

setTimeout((e)=>{

async function sendMail() {
  // send mail with defined transport object

  try {
 const info = await transporter.sendMail({
   from: `"Barkly 🐶" <${process.env.EMAIL_ADDRESS}>`, // sender address
   to: `${contact.email}`, // list of receivers
   subject: "Adopt with Barkly ✔", // Subject line
   text: "Hello world?", // plain text body
   html: template.template(title, message, contact.name), // html body
 });

  console.log(`Message to ${contact.name} sent: `, info.messageId);
  


  } catch (err){

    console.error(`Error sending your email to ${contact.name} : `, err);
    res.status(500).json("Error sending your email... :(");
  
} finally {

    console.log(`message to ${contact.name} sent succesfully!`);
}


}

sendMail();


},100000);

});


res.status(200).json("All messages are sending !!!");



});



module.exports = router;