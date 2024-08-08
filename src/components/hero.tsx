import heroImage from "../assets/img/teaching.png";
import React from "react";


const hero = () => {
  return (
    <div>
      <section id="hero">
        <section className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  Pawsibilities Await: Elevate Your Vet Journey{" "}
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Facilitating Opportunities: Our Team Bridges the Gap,
                  Connecting Veterinary Students to Internships with Precision
                  and Professionalism.
                </h2>
                <div data-aos="fade-up" data-aos-delay="800">
                  <a href="#about" className="btn-get-started scrollto">
                    About Us
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img src={heroImage} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default hero
