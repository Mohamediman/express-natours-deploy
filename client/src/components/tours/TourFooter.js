import React from 'react';
import { Link } from 'react-router-dom';

const TourFooter = ({ tour }) => {
  return (
    <div className="card__footer">
      <p>
        <span className="card__footer-value">${tour.price}</span>
        <span className="card__footer-text">per person</span>
      </p>
      <p className="card__ratings">
        <span className="card__footer-value">{tour.ratingsAverage}</span>
        <span className="card__footer-text">
          rating ({tour.ratingsQuantity})
        </span>
      </p>
      <a href={`/tour/${tour.slug}`} className="btn btn--green btn--small">
        Details
      </a>
    </div>
  );
};

export default TourFooter;
