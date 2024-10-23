import { Link } from "react-router-dom";
import heroImage from "../assets/img/teaching.png";
import React from "react";
import { useAuth } from "../authProvider";
import bgImage from "../assets/img/55.png"


const Hero = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="hero">
      <section id="hero">
        <section className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center hero-left">
                <h1 data-aos="fade-up">
                  Launch Your Career
                </h1>
                <div className="gradient-lines">
                  <div className="line green-blur"></div>
                  <div className="line green"></div>
                  <div className="line orange-blur half"></div>
                  <div className="line orange half"></div>
                  <div className="mask"></div>
                </div>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  AniScholar is a career readiness platform bridging the gap between the industry and the
                  educational institutes of learning.
                </h2>
                <div data-aos="fade-up" data-aos-delay="800">
                  {isLoggedIn ?
                    <Link to="/userDataForm" className="btn-get-started scrollto">Get CV</Link> :
                    <Link to="/register" className="btn-get-started scrollto">Get Started</Link>
                  }
                </div>
                <span className="background-blur"></span>
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

export default Hero
