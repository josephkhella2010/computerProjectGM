/* const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});
router.post("/", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phone,
    street,
    city,
    zipcode,
    amount,
    message,
    type,
  } = req.body;
  const newSms = {
    firstname,
    lastname,
    email,
    phone,
    street,
    city,
    zipcode,
    amount,
    message,
    type,
  };
  try {
    if (
      !firstname?.trim() ||
      !lastname?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !street?.trim() ||
      !city?.trim() ||
      !zipcode?.trim() ||
      type === "" ||
      amount === ""
    ) {
      return res.status(401).json({ sms: "please fill all field" });
    }
    // EMAIL CONTENT
    const emailData = `
      New Message From Website:

      from: ${email}
      
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone}

      Address:
      ${street}, ${city}, ${zipcode}

      Amount: ${amount}
      Type: ${type}

      Message:
      ${message}
    `;

    // SEND THE EMAIL
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL, // You receive the email
      subject: "New Contact Form Submission",
      text: emailData,
    });
    return res
      .status(200)
      .json({ sms: "successfully sent !", message: newSms });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

module.exports = router;
 */
const express = require("express");
const router = express.Router();
const SibApiV3Sdk = require("sib-api-v3-sdk");
///////////////////////////

///////////////////////////
const DateNow = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
};
///////////////////////////

// Load Brevo API key
SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env.BREVO_API_KEY;

const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
 
module.exports = router;
