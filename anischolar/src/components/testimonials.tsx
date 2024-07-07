import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import image1 from '../assets/img/testimonials/dummy1.jpg'
import image2 from '../assets/img/testimonials/2.jpeg'
import image3 from '../assets/img/testimonials/3.jpeg'
import image4 from '../assets/img/testimonials/4.jpeg'
import image5 from '../assets/img/testimonials/5.jpeg'
import TestimonialCard from "./testimonialCard";

const testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <section className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>What People Say</h2>
              <p>
                {" "}
                We are proud to work with some of the best in the industry.
              </p>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                speed={500}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <TestimonialCard
                    image={image1}
                    name={"Ntambi Moses"}
                    title={"Student,BVM, Makerere"}
                    desription={
                      "I am so thankful for the AniScholar. They got me placed on an equine farm in my first year recess semester. It was anamazing experience encompassed with skilfull training at the farm. AniScholar is all our solutuon to my fellowstudents🙏"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    image={image2}
                    name={"Binta Kugonza Joshu"}
                    title={"Student ,BVM, Makerere"}
                    desription={
                      " The places are always suggested by the university. Students are not allowed to go to farms where they want to go forinternship."
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    image={image3}
                    name={"Kazibwe Patrick"}
                    title={"Student ,BVM, Makerere"}
                    desription={
                      "It was a tireless venture where i was not involved in what i call  'THE DIRTY WORK' they did it for me. I was linked tothe most appropriate farms that i had desired to."
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    image={image4}
                    name={"Khaandi earnest"}
                    title={"Student ,BVM, Makerere"}
                    desription={
                      "Very educative and learning center not only knowledge but skills as well"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    image={image5}
                    name={"Misagga Andrew"}
                    title={"Student ,BVM, Makerere"}
                    desription={
                      " It was a mind opener and enabled me broaded my way of thinking as well as increased interest in reseach sector"
                    }
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default testimonials;
