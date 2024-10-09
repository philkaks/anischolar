import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import React from "react";

const Services = () => {
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
              <div className="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0">
                <Link
                  to="/internships"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ServiceCard
                    icon={<i className="bx bx-shape-square"></i>}
                    name={"Internship"}
                    desription={"Gain hands-on experience, mentorship."}
                  />
                </Link>
              </div>
              <div
                className="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0"
                style={{ position: "relative" }}
              >
                <ServiceCard
                  icon={<i className="bx bxs-book"></i>}
                  name={"Short Courses"}
                  desription={"Catch up on the latest trends and skills."}
                />
                <span className="badge services text-bg-success">
                  Coming Soon
                </span>
              </div>
              <div
                className="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0"
                style={{ position: "relative" }}
              >
                <ServiceCard
                  icon={<i className="bx bx-street-view"></i>}
                  name={"Projects"}
                  desription={
                    "Work on real-world projects with industry experts."
                  }
                />
                <span className="badge services text-bg-success">
                  Coming Soon
                </span>
              </div>
              <div
                className="col-md-6 col-lg-3 align-items-stretch mb-5 mb-lg-0"
                style={{ position: "relative" }}
              >
                <ServiceCard
                  icon={<i className="bx bx-tachometer"></i>}
                  name={"Events"}
                  desription={
                    "Attend events and network with industry leaders."
                  }
                />
                <span className="badge services text-bg-success">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
