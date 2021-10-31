import React from 'react';
import Moment from 'react-moment';

import { ImLocation } from 'react-icons/im';
import { FaRegFlag, FaRegUser } from 'react-icons/fa';
import { IoIosCalendar } from 'react-icons/io';

const TourCardDetail = ({ tour }) => {
  return (
    <div className="card__details">
      <h4 className="card__sub-heading">
        {tour.difficulty} {tour.duration}-day tour
      </h4>
      <p className="card__text">{tour.summary}</p>
      <div className="card__data">
        <ImLocation className="card__icon" />
        <span>{tour.startLocation.description}</span>
      </div>
      <div className="card__data">
        <IoIosCalendar className="card__icon" />
        <span>
          <Moment format="MMM YYYY">{tour.startDates[0]}</Moment>
        </span>
      </div>
      <div className="card__data">
        <FaRegFlag className="card__icon" />
        <span>{tour.locations.length} stops</span>
      </div>
      <div className="card__data">
        <FaRegUser className="card__icon" />
        <span>{tour.maxGroupSize} people</span>
      </div>
    </div>
  );
};

export default TourCardDetail;
