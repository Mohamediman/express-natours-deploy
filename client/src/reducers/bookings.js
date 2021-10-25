import { GET_BOOKINGS } from './../actions/types';

const initialState = {
  toursBooked: null,
};

function bookings(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS:
      return {
        ...state,
        toursBooked: action.payload,
      };
    default:
      return state;
  }
}

export default bookings;
