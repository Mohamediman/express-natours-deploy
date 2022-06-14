import React from 'react';
import PropTypes from 'prop-types';

import TourFooter from './TourFooter';
import TourCardDetail from './TourCardDetail';
import TourCardHeader from './TourCardHeader';

const Tour = ({ tour }) => {
  return (
    <div className="card">
      <TourCardHeader tour={tour} />

      <TourCardDetail tour={tour} />

      <TourFooter tour={tour} />
    </div>
  );
};

Tour.propTypes = {
  tour: PropTypes.object,
};

export default Tour;
