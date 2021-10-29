import React from 'react';
import PropTypes from 'prop-types';
import Tour from './Tour';

import { connect } from 'react-redux';
import { SelectAllTours } from '../../redux/tours/tours.selectors';

const Tours = ({ tours }) => {
  return (
    <main className="main">
      <div className="card-container">
        {tours &&
          tours.length > 0 &&
          tours.map((tour) => <Tour key={tour._id} tour={tour} />)}
      </div>
    </main>
  );
};

Tours.propTypes = {
  tours: PropTypes.array,
};
const mapStateToProps = (state) => ({
  tours: SelectAllTours(state),
});

export default connect(mapStateToProps)(Tours);
