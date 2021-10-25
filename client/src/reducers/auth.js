import {
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_USER,
  USER_LOGOUT,
  AUTH_SUCCESS,
  UPDATE_CURRENT_USER,
  UPDATE_USER_PASSWORD,
} from './../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case UPDATE_CURRENT_USER:
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
    case CLEAR_USER:
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}

export default auth;
