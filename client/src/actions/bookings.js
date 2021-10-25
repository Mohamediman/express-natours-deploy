import axios from 'axios';

import {
  CREATE_BOOKING,
  BOOKING_SUCCESS,
  BOOKING_ERROR,
  GET_BOOKINGS,
} from './types';

//=== Create bookings
export const createBooking = (tourId, userId, price) => async (dispatch) => {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get(
      `/api/v1/bookings/my-tours/${tourId}/${userId}/${price}`
    );

    console.log('CreateBookings:', res.data);

    // dispatch({
    //     type: GET_BOOKINGS,
    //     payload: res.data
    // })
  } catch (err) {
    console.log('CreateBookings Error:', err.response.data.message);

    //dispatch({ type: BOOKING_ERROR })
  }
};

//=== get my bookings
export const getAllBooking = () => async (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`/api/v1/bookings/my-tours`, options);

    console.log('my bookings from res.data:', res.data);
    console.log('my bookings from res.data.tours:', res.data.tours);

    dispatch({
      type: GET_BOOKINGS,
      payload: res.data.tours,
    });
  } catch (err) {
    console.log('my bookings Error:', err.response.data.message);

    //dispatch({ type: BOOKING_ERROR })
  }
};
