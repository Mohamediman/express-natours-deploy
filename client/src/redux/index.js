import { combineReducers } from 'redux';
import alerts from './alerts/alerts.reducer';
import auth from './auth/auth.reducer';
import tours from './tours/tours.reducer';
import bookings from './bookings/bookings.reducer';

export default combineReducers({
  tours,
  auth,
  bookings,
  alerts,
});
