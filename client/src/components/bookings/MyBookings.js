import React, { useEffect } from 'react';
import Tour from '../tours/Tour';

import { connect } from 'react-redux';
import { getAllBooking } from '../../redux/bookings/bookings.actions';
import { selectMybookings } from '../../redux/bookings/bookings.selectors';

const MyBookings = ({ getAllBooking, tours }) => {
  useEffect(() => {
    getAllBooking();

    //eslint-disable-next-line
  }, []);
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
const mapStateToProps = (state) => ({
  tours: selectMybookings(state),
});

export default connect(mapStateToProps, { getAllBooking })(MyBookings);
