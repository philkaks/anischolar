import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <section id="testimonials">
        <section className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>What People Say</h2>
              <p>We are proud to work with some of the best in the industry.</p>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                speed={500}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      image={testimonial.image}
                      name={testimonial.name}
                      title={testimonial.title}
                      desription={testimonial.words}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
