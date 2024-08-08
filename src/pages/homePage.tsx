import AboutUs from "../components/aboutUs";
import BackToTop from "../components/backToTop";
import Clients from "../components/clients";
import Contact from "../components/contact";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Team from "../components/team";
import Testimonials from "../components/testimonials";
import '../App.css';
import '../App.js'
import "aos/dist/aos.css";
import React from "react";



const homePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <Testimonials />
      <Gallery />
      <Team />
      <Faq />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default homePage
