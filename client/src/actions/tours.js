//eslint-disable
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

import {
  GET_TOURS,
  TOURS_ERRORS,
  GET_TOUR,
  TOUR_ERRORS,
  LOAD_TOUR,
  BOOKTOUR,
} from './types';

import setAuthtoken from '../utils/SetAuthToken';

const stripePromise = loadStripe(
  'pk_test_51JRSF2AJHQSuL36xgVLN3iL6uDsgccyG5gdbXPzBwPb6PXXRGG5LPet9720qWUKB7zJ9Hkar7B4fqXs55txpLiBd00x57dIp8g'
);

export const getAllTours = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/tours');
    dispatch({
      type: GET_TOURS,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TOURS_ERRORS,
      payload: err,
    });
  }
};

export const getTour = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/v1/tour/${slug}`);
    dispatch({
      type: GET_TOUR,
      payload: res.data.tour,
    });
  } catch (err) {
    dispatch({
      type: TOUR_ERRORS,
      payload: err.response,
    });
  }
};
export const bookTour = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthtoken(localStorage.token);
  }

  try {
    const session = await axios.get(`/api/v1/bookings/checkout-session/${id}`);

    //===Redirect to stripe Checkout page
    await (
      await stripePromise
    ).redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err.response);
  }
};

//==== Load tour
export const loadTour = () => (dispatch) => {
  if (localStorage.tour) {
    dispatch({
      type: LOAD_TOUR,
      payload: localStorage.tour,
    });
  }
};
