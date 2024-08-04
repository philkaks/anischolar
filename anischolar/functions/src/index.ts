// /**
//  * Import function triggers from their respective submodules:
//  *
//  * import {onCall} from "firebase-functions/v2/https";
//  * import {onDocumentWritten} from "firebase-functions/v2/firestore";
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");

// // Initialize Firebase Admin
// admin.initializeApp();

// // Configure Nodemailer
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "musasiziallansmith@gmail.com",
//     pass: "musasizi2004",
//   },
// });

// exports.sendEmail = functions.firestore
//   .document("applications/{docId}")
//   .onCreate((snap: { data: () => any; }, context: { params: { docId: any; }; }) => {
//     const newValue = snap.data();

//     const mailOptions = {
//       from: "anischolar23@gmail.com",
//       to: newValue.email,
//       subject: "New Document Added",
//       text: `A new document with ID: ${context.params.docId} was added to your collection.`,
//     };

//     return transporter.sendMail(mailOptions, (error: any, info: { response: any; }) => {
//       if (error) {
//         console.error("Error sending email:", error);
//       } else {
//         console.log("Email sent:", info.response);
//       }
//     });
//   });
