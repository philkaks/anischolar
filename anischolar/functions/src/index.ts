/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

// Replace with your SendGrid API Key
const SENDGRID_API_KEY = "YOUR_SENDGRID_API_KEY";
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendEmail = functions.firestore
  .document("applications/{docId}")
  .onCreate((snap, context) => {
    const data = snap.data();

    const msg = {
      to: data.email, // recipient email
      from: "anischolar23@gmail.com", // your email
      subject: "Internship Application Received",
      text: `Hello ${data.firstName} ${data.lastName},\n\nThank you for applying for the internship. We shall get back to you soon.`,
    };

    return sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error: any) => {
        console.error("Error sending email:", error);
      });
  });
