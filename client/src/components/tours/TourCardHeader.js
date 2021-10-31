import React from 'react';

const TourCardHeader = ({ tour }) => {
  return (
    <div className="card__header">
      <div className="card__picture">
        <div className="card__picture-overlay">&nbsp;</div>
        <img
          src={`/img/tours/${tour.imageCover}`}
          alt={tour.name}
          className="card__picture-img"
        />
      </div>
      <h3 className="heading-tertirary">
        <span>{tour.name}</span>
      </h3>
    </div>
  );
};

export default TourCardHeader;
