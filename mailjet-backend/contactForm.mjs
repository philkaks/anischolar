import express from "express";
import Mailjet from "node-mailjet";
import cors from "cors";

const app = express();
const mailjet = Mailjet.apiConnect(
  "d14f17f1b6a63cd91208f09e08465867",
  "8ebcdf2043f74f45ebeb5df6b219e237"
);

app.use(express.json());
app.use(cors());

app.post("/api/sendMailjet", async (req, res) => {
    const { name, subject, email, message } = req.body;
  
    console.log("Received data:", { name, subject, email, message });
  
    try {
      await mailjet.post("send").request({
        Messages: [
          {
            From: {
              Email: 'anischolar23@gmail.com',
              Name: 'allan',
            },
            To: [
              {
                Email: "musasiziallansmith@gmail.com",
              },
            ],
            Subject: subject,
            TextPart: `Message from ${name} (${email}): ${message}`,
          },
        ],
      });
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Mailjet Error:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  

app.listen(5000, () => console.log("Server running on port 5000"));
