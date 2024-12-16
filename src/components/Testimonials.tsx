import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import testimonial1 from "../assets/img/testmonial1.png"

const TestimoniallCard = () =>{
  return (
    <div
                className="relative drop-shadow-xl w-[326px] h-[450px] overflow-hidden rounded-xl bg-[#D8FFD9] hover:bg-[#FB923C] mr-6"
              >
                <div
                  className="absolute flex flex-col items-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#D8FFD9] hover:bg-[#FB923C]"
                >
                  <h1 className="text-black text-3xl p-2">Amanda</h1>
                  <img className="rounded-full h-28 w-28 my-2" src={testimonial1} alt="testimonial1" />
                  <p className="text-black p-3">
                    AniScholar is a pioneering EdTech career readiness platform dedicated to bridging the
                    gap between academia and industry. career readiness platform dedicated to bridging the
                    gap between academia and industry.
                  </p>
                  <span className="text-zinc-700">Student Makerere University</span>
                </div>
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
              </div>
  )
}

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
            <div className="flex items-center justify-center">
              <TestimoniallCard />
              <TestimoniallCard />
              <TestimoniallCard />
            </div>

            {/* <div
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
            </div> */}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
