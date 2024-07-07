import "./App.css";
import "./App.js";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Clients from "./components/clients";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Gallery from "./components/gallery";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";

function App() {

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

export default App;
