import axios from "axios";
import { useState } from "react";

const contact = () => {
  const rows = 5;

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
   message: "",
  });

   const [responseMessage, setResponseMessage] = useState("");

   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

   const handleSubmit = (e) => {
     e.preventDefault();

     axios
       .post(
         "http://localhost/contact.php",
         new URLSearchParams(formData).toString(),
         {
           headers: {
             "Content-Type": "application/x-www-form-urlencoded",
           },
         }
       )
       .then((response) => {
         setResponseMessage(response.data.message);
       })
       .catch((error) => {
         console.error("Error:", error);
         setResponseMessage("An error occurred.");
       });
   };

  return (
    <div>
      <section id="contact">
        <section className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Contact Us</h2>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="contact-about">
                  <h3>AniScholar</h3>
                  <p>
                    Feel free to reach out to us for any inquiries,
                    collaborations, or information about our internship
                    opportunities for veterinary students. Our dedicated team is
                    available during our business hours to assist you.
                  </p>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line"></i>
                    <p>
                      Makerere University
                      <br />
                      college of veterinary services, COVAB
                    </p>
                  </div>

                  <div>
                    <i className="ri-mail-send-line"></i>
                    <p>anischolar23@gmail.com</p>
                  </div>

                  <div>
                    <i className="ri-phone-line"></i>
                    <p>+256 750 621209. / +256 755 144475. </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <textarea
                      rows={rows}
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default contact;
