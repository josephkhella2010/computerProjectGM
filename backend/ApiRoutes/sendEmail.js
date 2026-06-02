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

// Brevo Configuration
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const brevo = new SibApiV3Sdk.TransactionalEmailsApi();

// Date Helper

// Date Helper
const getCurrentDate = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `Date: ${day}-${month}-${year} Time: ${hour}:${minute}:${second}`;
};

router.post("/", async (req, res) => {
  try {
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

    // Validation
    if (
      !firstname?.trim() ||
      !lastname?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !street?.trim() ||
      !city?.trim() ||
      !zipcode?.trim() ||
      !String(amount)?.trim() ||
      !String(type)?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const currentDate = getCurrentDate();

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // Sender (must be verified in Brevo)
    sendSmtpEmail.sender = {
      name: "GM Computer Recycle",
      email: process.env.USER_EMAIL,
    };

    // Receiver
    sendSmtpEmail.to = [
      {
        email: process.env.USER_EMAIL,
        name: "Admin",
      },
    ];

    // Customer email for reply
    sendSmtpEmail.replyTo = {
      email: email,
      name: `${firstname} ${lastname}`,
    };

    sendSmtpEmail.subject = `New ${type} Request`;

    sendSmtpEmail.htmlContent = `
      <h2>New Website Request</h2>

      <p><strong>Date:</strong> ${currentDate}</p>

      <hr>

      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <h3>Address</h3>
      <p>${street}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Zip Code:</strong> ${zipcode}</p>

      <h3>Request Details</h3>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Type:</strong> ${type}</p>

      <h3>Message</h3>
      <p>${message || "No message provided"}</p>
    `;


    const result = await brevo.sendTransacEmail(sendSmtpEmail);


    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    console.error("========== BREVO ERROR ==========");
    console.error(error);

    if (error.response) {
      console.error("STATUS:", error.response.statusCode);
      console.error("BODY:", error.response.body);
    }

    return res.status(500).json({
      success: false,
      message: error.message,
      brevoError: error.response?.body || null,
    });
  }
});

module.exports = router;
