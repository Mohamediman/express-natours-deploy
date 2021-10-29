import React from 'react';
import PropTypes from 'prop-types';

import { ImClock } from 'react-icons/im';
import { ImLocation } from 'react-icons/im';

const TourHeader = ({ tour }) => {
  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp; </div>
        <img
          src={`/img/tours/${tour.imageCover}`}
          alt={tour.name}
          className="header__hero-img"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>
            {tour && tour.name.split(' ').splice(0, 2).join(' ')}
            <br />
            {tour && tour.name.split(' ').splice(2).join('')}
          </span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <ImClock className="heading-box__icon" />
            <span className="heading-box__text">
              {tour && tour.duration} days
            </span>
          </div>
          <div className="heading-box__detail">
            <ImLocation className="heading-box__icon" />
            <span className="heading-box__text">
              {' '}
              {tour && tour.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

TourHeader.propTypes = {
  tour: PropTypes.object,
};

export default TourHeader;
