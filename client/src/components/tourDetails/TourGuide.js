import React from 'react';
import PropTypes from 'prop-types';

const TourGuide = ({ guide }) => (
  <div className="overview-box__detail">
    {guide && guide.photo ? (
      <img
        src={`/img/users/${guide.photo}`}
        alt={guide.role}
        className="overview-box__img"
      />
    ) : (
      <img
        src={`/img/users/default.jpeg`}
        alt={guide.role}
        className="overview-box__img"
      />
    )}

    <span className="overview-box__label">{guide.role}</span>
    <span className="overview-box__text">{guide.name}</span>
  </div>
);

TourGuide.propTypes = {
  guide: PropTypes.object,
};

export default TourGuide;
