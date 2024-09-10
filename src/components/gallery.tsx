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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              speed={500}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  // Mobile devices
                  slidesPerView: 1,
                },
                768: {
                  // Tablets and larger screens
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <GalleryCard image={image1} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image2} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image11} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image4} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image5} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image6} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image7} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image8} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image9} />
              </SwiperSlide>
              <SwiperSlide>
                <GalleryCard image={image10} />
              </SwiperSlide>
              {/* Navigation buttons */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default gallery;
