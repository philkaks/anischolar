import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import axios from 'axios';
import cors from 'cors'; // Import CORS middleware

const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(json()); // Use JSON body parser

// Mailjet credentials
const apiKey = 'd14f17f1b6a63cd91208f09e08465867';
const apiSecret = '8ebcdf2043f74f45ebeb5df6b219e237';

// Mailjet endpoint
const mailjetURL = 'https://api.mailjet.com/v3.1/send';

// Route to send email
app.post('/send-email', async (req, res) => {
  try {
    const response = await axios.post(mailjetURL, req.body, {
      headers: {
        // eslint-disable-next-line no-undef
        'Authorization': `Basic ${Buffer.from(apiKey + ':' + apiSecret).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
