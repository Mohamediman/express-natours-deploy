import { createSelector } from 'reselect';

const selectBookings = (state) => state.bookings;

export const selectMybookings = createSelector(
  selectBookings,
  (bookings) => bookings.toursBooked
);
