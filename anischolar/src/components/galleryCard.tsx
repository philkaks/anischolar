import React from "react";

interface galleryCarProp {
  image: string;
}
const galleryCard: React.FC<galleryCarProp> = ({ image }) => {
  return (
    <div>
      <img src={image} className="img-width" alt=""></img>
      <div className="portfolio-info">
        <div className="portfolio-links">
          <a
            href={image}
            data-gallery="portfolioGallery"
            className=""
            title=""
          ></a>
        </div>
      </div>
    </div>
  );
};

export default galleryCard;
