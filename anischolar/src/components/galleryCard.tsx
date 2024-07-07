import React from "react";

interface galleryCarProp {
  image: string;
}
const galleryCard: React.FC<galleryCarProp> = ({ image }) => {
  return (
    <div>
      <div className="portfolio-wrap">
        <img src={image} className="img-width" alt=""></img>
        <div className="portfolio-info">
          <div className="portfolio-links">
            <a
              href={image}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title=""
            >
              <i className="bx bx-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default galleryCard;
