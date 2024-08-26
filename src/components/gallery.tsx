// import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import image1 from "../assets/img/portfolio/1.jpeg";
import image2 from "../assets/img/portfolio/2.jpeg";
import image4 from "../assets/img/portfolio/4.jpeg";
import image5 from "../assets/img/portfolio/5.jpeg";
import image6 from "../assets/img/portfolio/6.jpeg";
import image7 from "../assets/img/portfolio/7.jpeg";
import image8 from "../assets/img/portfolio/8.jpeg";
import image9 from "../assets/img/portfolio/9.jpeg";
import image10 from "../assets/img/portfolio/10.jpeg";
import image11 from "../assets/img/portfolio/11.jpeg";
import GalleryCard from "./galleryCard";

const gallery = () => {
 
  return (
    <div>
      <section id="portfolio">
        <section className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Gallery</h2>
              <p>visual narrative of the enriching experiences we create.</p>
            </div>

            <div
              className="row portfolio-container mt-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                className="portfolio-item col-md-4
              "
              >
                <GalleryCard image={image1} />
              </div>
              <div
                className="portfolio-item col-md-4
              "
              >
                <GalleryCard image={image2} />
              </div>
              <div
                className="portfolio-item col-md-4
              "
              >
                <GalleryCard image={image11} />
              </div>
              <div
                className="portfolio-item col-md-4
              "
              >
                <GalleryCard image={image4} />
              </div>
              <div
                className="portfolio-item col-md-4
              "
              >
                <GalleryCard image={image5} />
              </div>
              <div
                className=" portfolio-item col-md-4
              "
              >
                <GalleryCard image={image6} />
              </div>
              <div
                className="portfolio-item col-md-4
               "
              >
                <GalleryCard image={image7} />
              </div>
              <div
                className=" portfolio-item col-md-4
              "
              >
                <GalleryCard image={image8} />
              </div>
              <div
                className=" portfolio-item col-md-4
              "
              >
                <GalleryCard image={image9} />
              </div>
              <div
                className=" portfolio-item col-md-4
              "
              >
                <GalleryCard image={image10} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default gallery;
