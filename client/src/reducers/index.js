import { combineReducers } from 'redux';
import alerts from './alerts';
import auth from './auth';
import tours from './tours';
import bookings from './bookings';

export default combineReducers({
  tours,
  auth,
  bookings,
  alerts,
});
