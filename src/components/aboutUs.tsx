import React from "react";
import image1 from "../assets/img/vet.png";
// import CountUp from "react-countup";

const aboutUs = () => {
  return (
    <div>
      <section id="about" className="mt-0 mb-0">
        <section className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                <p>
                  Step into the future with AniScholar and intern with the best.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Apply{" "}
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Join the leading
                    firms
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Become the best at
                    your dream job
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>
                  AniScholar is a career readiness platform dedicated to
                  bridging the gap between students and the workforce. We offer
                  career readiness, guidance, tailored internships and a range
                  of programs designed to equip students with the skills and
                  experience they need to succeed. Through webinars, workshops,
                  fairs and industry connections, we empower students to
                  transition seamlessly from education to employment, ensuring
                  they are well-prepared to thrive in their chosen careers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <img src={image1} alt="" className="img-fluid"></img>
              </div>

              <div
                className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="content">
                  <div className="row">
                    <div className="col-md-12 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <p>
                          <h3>Our Vission</h3>
                          To lead in career readiness and connectivity of students to opportunities through tailored internships.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-12 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        {/* <i className="bi bi-journal-richtext"></i> */}
                        {/* <CountUp start={0} end={85}></CountUp> */}
                        <p>
                          <h3>Mission</h3> 
                          To foster student-employer synergy through crafted internships that advance career readiness, enhance skill development, and showcase student potential in the workplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default aboutUs;
