import axios from 'axios';

import { GET_BOOKINGS } from './types';

//=== get my bookings
export const getAllBooking = () => async (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.get(`/api/v1/bookings/my-tours`, options);

    dispatch({
      type: GET_BOOKINGS,
      payload: res.data.tours,
    });
  } catch (err) {
    console.log('my bookings Error:', err.response.data.message);
  }
};
