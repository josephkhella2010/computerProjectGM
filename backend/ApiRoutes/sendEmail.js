/* 

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
 */

const express = require("express");
const router = express.Router();
const SibApiV3Sdk = require("sib-api-v3-sdk");

// ============================================
// BREVO CONFIGURATION
// ============================================

const defaultClient = SibApiV3Sdk.ApiClient.instance;

defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const brevo = new SibApiV3Sdk.TransactionalEmailsApi();

// ============================================
// DATE HELPER
// ============================================

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

// ============================================
// SEND EMAIL
// POST /api/send-email
// ============================================

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

    // ============================================
    // VALIDATION
    // ============================================

    if (
      !firstname?.trim() ||
      !lastname?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !street?.trim() ||
      !city?.trim() ||
      !zipcode?.trim() ||
      !String(amount ?? "").trim() ||
      !String(type ?? "").trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // ============================================
    // CHECK ENV VARIABLES
    // ============================================

    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY is missing");

      return res.status(500).json({
        success: false,
        message: "Brevo API key is not configured",
      });
    }

    if (!process.env.USER_EMAIL) {
      console.error("USER_EMAIL is missing");

      return res.status(500).json({
        success: false,
        message: "Sender email is not configured",
      });
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error("ADMIN_EMAIL is missing");

      return res.status(500).json({
        success: false,
        message: "Admin email is not configured",
      });
    }

    // ============================================
    // CURRENT DATE
    // ============================================

    const currentDate = getCurrentDate();

    // ============================================
    // CREATE BREVO EMAIL
    // ============================================

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // ============================================
    // SENDER
    // This email must be verified in Brevo
    // ============================================

    sendSmtpEmail.sender = {
      name: "GM Computer Recycle",
      email: process.env.USER_EMAIL,
    };

    // ============================================
    // RECEIVER
    // This is where the form notification goes
    // ============================================

    sendSmtpEmail.to = [
      {
        email: process.env.ADMIN_EMAIL,
        name: "Admin",
      },
    ];

    // ============================================
    // REPLY TO CUSTOMER
    // When you click Reply, it goes to customer
    // ============================================

    sendSmtpEmail.replyTo = {
      email: email,
      name: `${firstname} ${lastname}`,
    };

    // ============================================
    // SUBJECT
    // ============================================

    sendSmtpEmail.subject = `New ${type} Request`;

    // ============================================
    // EMAIL CONTENT
    // ============================================

    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>New Website Request</title>
        </head>

        <body style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2>New Website Request</h2>

          <p>
            <strong>Date:</strong> ${currentDate}
          </p>

          <hr>

          <h3>Customer Information</h3>

          <p>
            <strong>Name:</strong>
            ${firstname} ${lastname}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <h3>Address</h3>

          <p>
            <strong>Street:</strong>
            ${street}
          </p>

          <p>
            <strong>City:</strong>
            ${city}
          </p>

          <p>
            <strong>Zip Code:</strong>
            ${zipcode}
          </p>

          <h3>Request Details</h3>

          <p>
            <strong>Amount:</strong>
            ${amount}
          </p>

          <p>
            <strong>Type:</strong>
            ${type}
          </p>

          <h3>Message</h3>

          <p>
            ${message?.trim() || "No message provided"}
          </p>

          <hr>

          <p>
            This message was sent from the GM Computer Recycle website.
          </p>

        </body>
      </html>
    `;

    // ============================================
    // SEND THROUGH BREVO
    // ============================================

    const result = await brevo.sendTransacEmail(sendSmtpEmail);

    console.log("=================================");
    console.log("BREVO EMAIL SENT SUCCESSFULLY");
    console.log("=================================");
    console.log("Message ID:", result?.messageId);

    // ============================================
    // SUCCESS RESPONSE
    // ============================================

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: result?.messageId || null,
    });
  } catch (error) {
    // ============================================
    // BREVO ERROR
    // ============================================

    console.error("=================================");
    console.error("BREVO EMAIL ERROR");
    console.error("=================================");

    console.error("Message:", error.message);

    if (error.response) {
      console.error("Status:", error.response.statusCode);
      console.error("Body:", error.response.body);
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
      brevoError: error.response?.body || null,
    });
  }
});

module.exports = router;
