import image1 from "../assets/img/clients/marula.png"
import image2 from "../assets/img/clients/olivet.png"
import image3 from "../assets/img/clients/vetline.png"
import image4 from "../assets/img/clients/brinas.jpeg"
import image5 from "../assets/img/clients/naliri.png"
import image6 from "../assets/img/clients/mpigiLG.png"
import image7 from "../assets/img/clients/nagrc.png"
import React from "react"


const clients = () => {
  return (
    <div>
      <section id="clients" className="clients clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image1}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
              ></img>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image2}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
              ></img>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image3}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="100"
              ></img>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image4}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="200"
              ></img>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image5}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="400"
              ></img>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image6}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="600"
              ></img>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img
                src={image7}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="500"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default clients
