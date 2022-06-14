import React from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Tour from './Tour';
import Spinner from '../spinner/Spinner';

import { connect, useSelector } from 'react-redux';
import { SelectAllTours } from '../../redux/tours/tours.selectors';

const Tours = () => {
  const structuredSelector = createStructuredSelector({
    tours: SelectAllTours,
  });
  const { tours } = useSelector(structuredSelector);
  return (
    <main className="main">
      <div className="card-container">
        {tours && tours.length > 0 ? (
          tours.map((tour) => <Tour key={tour._id} tour={tour} />)
        ) : (
          <Spinner />
        )}
      </div>
    </main>
  );
};

Tours.propTypes = {
  tours: PropTypes.array,
};

export default connect(null)(Tours);
