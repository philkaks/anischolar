import React from "react";

interface teamCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  name: string;
  desription: string;
}
const ServiceCard: React.FC<teamCardProps> = ({ icon, name, desription }) => {
  return (
    <div>
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon">{icon}</div>
        <h4 className="title">
          <a href="">{name}</a>
        </h4>
        <p className="description">{desription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
