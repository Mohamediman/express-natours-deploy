import {
  GET_TOURS,
  GET_TOUR,
  TOURS_ERRORS,
  TOUR_ERRORS,
  LOAD_TOUR,
  BOOKTOUR,
} from './types';

const initialState = {
  tours: [],
  tour: null,
  toursBooked: null,
  loading: true,
  errors: null,
};

function tours(state = initialState, action) {
  switch (action.type) {
    case GET_TOURS:
      return {
        ...state,
        tours: action.payload,
        loading: false,
        errors: null,
      };
    case GET_TOUR:
      return {
        ...state,
        tour: action.payload,
        errors: null,
        loading: false,
      };
    case LOAD_TOUR:
      return {
        ...state,
        tour: JSON.parse(action.payload),
        errors: null,
        loading: false,
      };
    case BOOKTOUR:
      return {
        ...state,
        toursBooked: action.payload,
        errors: null,
        loading: false,
      };
    case TOURS_ERRORS:
      return {
        ...state,
        tours: [],
        tour: null,
        errors: action.payload,
        loading: false,
      };
    case TOUR_ERRORS:
      return {
        ...state,
        tour: null,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default tours;
