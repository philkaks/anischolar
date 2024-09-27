import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const mailjetURL = 'https://api.mailjet.com/v3.1/send';

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Update this to your frontend URL if different
}));

// Endpoint to send emails using Mailjet
app.post("/api/sendMailjet", async (req, res) => {
  const { name, subject, email, message } = req.body;

  console.log("Received data:", { name, subject, email, message });

  try {
    // Send email using Mailjet API
    await axios.post(mailjetURL, {
      Messages: [
        {
          From: {
            Email: email,  // Your verified sender email address
            Name: name,  // Sender name
          },
          To: [
            {
              Email: 'anischolar23@gmail.com',  
            },
          ],
          Subject: subject, 
          TextPart: `Message from ${name} (${email}): ${message}`,  // Plain text version of the email
          HTMLPart: `<h3>Message from ${name} (${email})</h3><p>${message}</p>`,  // HTML version of the email
        },
      ],
    }, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line no-undef
        'Authorization': 'Basic ' + Buffer.from('d14f17f1b6a63cd91208f09e08465867:8ebcdf2043f74f45ebeb5df6b219e237').toString('base64')
      }
    });

    // Respond with success message
    res.status(200).json({ success: true });
  } catch (error) {
    // Log error and respond with failure message
    console.error("Mailjet Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server on port 8080
app.listen(8080, () => console.log("Server running on port 8080"));
