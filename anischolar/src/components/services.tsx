import { Link } from "react-router-dom";
import ServiceCard from "./serviceCard";

const services = () => {
  return (
    <div>
      <section id="services">
        <section className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>Tailored for your Excellence!</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <Link to="/internships" style={{color: "black", textDecoration: "none"}}>
                  <ServiceCard
                    icon={<i className="bx bx-shape-square"></i>}
                    name={"Internship"}
                    desription={"Gain hands-on experience, mentorship."}
                  />
                </Link>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <ServiceCard
                  icon={<i className="bx bxs-book"></i>}
                  name={"Short Courses"}
                  desription={"Catch up on the latest trends and skills."}
                />
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <ServiceCard
                  icon={<i className="bx bx-street-view"></i>}
                  name={"Projects"}
                  desription={
                    "Work on real-world projects with industry experts."
                  }
                />
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <ServiceCard
                  icon={<i className="bx bx-tachometer"></i>}
                  name={"Events"}
                  desription={
                    "Attend events and network with industry leaders."
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default services;
