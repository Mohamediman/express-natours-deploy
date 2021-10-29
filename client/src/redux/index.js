import { combineReducers } from 'redux';
import alerts from '../reducers/alerts';
import auth from '../reducers/auth';
import tours from './tours/tours.reducer';
import bookings from '../reducers/bookings';

export default combineReducers({
  tours,
  auth,
  bookings,
  alerts,
});
