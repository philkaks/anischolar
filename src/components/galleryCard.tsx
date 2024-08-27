import React from "react";

interface galleryCarProp {
  image: string;
}
const galleryCard: React.FC<galleryCarProp> = ({ image }) => {
  return (
    <div>
      <img src={image} className="img-width" alt=""></img>
      <div className="portfolio-info">
          <a
            href={image}
            data-gallery="portfolioGallery"
            className="image-holder"
            title=""
          ></a>
      </div>
    </div>
  );
};

export default galleryCard;
