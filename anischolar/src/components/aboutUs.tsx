
import image1 from "../assets/img/vet.png"

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
                  AniScholar is a digital platform that connects agricultural
                  students (crop & animal studies) with internships that ignite
                  their passions, challenge their minds, and shape their
                  professional identities. We go beyond just placements,
                  matching students with interests, opportunities that foster
                  real-world impact, collaboration, and meaningful mentorship.
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
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
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="65"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Happy Students</strong> Delighting Beyond
                          Expectations: Our Success is Measured in Satisfied
                          Smiles!
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="85"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>internships</strong> Unlocking Potential, One
                          Internship at a Time: Where Learning Meets Experience!
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="15"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Projects</strong> Join the Momentum, Fuel the
                          Innovation: Where Passion Meets Purpose in Every
                          Project!
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
}

export default aboutUs
