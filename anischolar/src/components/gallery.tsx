import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import image1 from "../assets/img/portfolio/1.jpeg";
import image2 from "../assets/img/portfolio/2.jpeg";
import image3 from "../assets/img/portfolio/3.jpeg";
import image4 from "../assets/img/portfolio/4.jpeg";
import image5 from "../assets/img/portfolio/5.jpeg";
import image6 from "../assets/img/portfolio/6.jpeg";
import image7 from "../assets/img/portfolio/7.jpeg";
import image8 from "../assets/img/portfolio/8.jpeg";
import image9 from "../assets/img/portfolio/9.jpeg";
import GalleryCard from "./galleryCard";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import Isotope from 'isotope-layout';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";


const gallery = () => {
//  const useIsotope = () => {
//   useEffect(() => {
//     const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement;
//     if (portfolioContainer) {
//       const portfolioIsotope = new Isotope(portfolioContainer, {
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows' 

//       });

//       const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
//       portfolioFilters.forEach(filter => {
//         filter.addEventListener('click', (e) => {
//           e.preventDefault();
//           portfolioFilters.forEach(el => el.classList.remove('filter-active'));
//           filter.classList.add('filter-active');


//           portfolioIsotope.arrange({
//             filter: filter.getAttribute('data-filter')
//  || '*', 
//           });
//           portfolioIsotope.on("arrangeComplete", () => {
//             AOS.refresh(); 
//           });
//         });
//       });
//     }
//   }, []);
// };
  
//   useIsotope();
  return (
    <div>
      <section id="portfolio">
        <section className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Gallery</h2>
              <p>visual narrative of the enriching experiences we create.</p>
            </div>
            <div className="row " data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-12 justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">Internships</li>
                  <li data-filter=".filter-card">Projects</li>
                  <li data-filter=".filter-web">Events</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  <div className="portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image1} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image2} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-item  filter-app">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image3} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image4} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-item  filter-web">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image5} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image6} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="portfolio-item  filter-card">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image7} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image8} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" portfolio-item filter-web">
                    <div className="portfolio-wrap">
                      <GalleryCard image={image9} />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default gallery;
