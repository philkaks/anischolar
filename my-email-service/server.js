// server.js
import express from 'express';
import { json } from 'body-parser';
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);
const app = express();
const port = 5000; // Or any port you prefer

app.use(json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email } = req.body;

  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'musasizi.com', // Your Mailjet verified sender email
            Name: 'Your Name'
          },
          To: [
            {
              Email: email,
              Name: `${firstName} ${lastName}`
            }
          ],
          Subject: 'Thank you for applying!',
          TextPart: `Dear ${firstName} ${lastName},\n\nThank you for applying to our program. We will get back to you as soon as possible.\n\nBest regards,\nYour Team`,
        }
      ]
    });

  request
    .then(result => {
      console.log(result.body);
      res.status(200).json({ message: 'Email sent' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Failed to send email' });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
