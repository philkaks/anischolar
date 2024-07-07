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
            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-12 d-flex justify-content-center">
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
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <GalleryCard image={image1} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <GalleryCard image={image2} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <GalleryCard image={image3} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <GalleryCard image={image4} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <GalleryCard image={image5} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <GalleryCard image={image6} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <GalleryCard image={image7} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <GalleryCard image={image8} />
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <GalleryCard image={image9} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default gallery;
