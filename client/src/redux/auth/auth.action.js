import axios from 'axios';
import Cookies from 'js-cookie';
import {
  USER_LOADED,
  CLEAR_USER,
  AUTH_ERROR,
  USER_LOGOUT,
  UPDATE_CURRENT_USER,
  UPDATE_USER_PASSWORD,
} from './types';

import { setAlert } from './setAlert';

//=== Load User
export const loadUser = () => async (dispatch) => {
  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('/api/v1/users/me', options);
    dispatch({
      type: USER_LOADED,
      payload: res.data.data.data,
    });
  } catch (err) {
    console.log('Error from loading the user', err.response);
  }
};

//==== Login a User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/v1/users/login', body, config);
    dispatch(setAlert('Success Login', 'success'));
    Cookies.set('jwt', res.data.token, { expires: 7 });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    // dispatch(setAlert(err.response.data.message, 'error'))
    Cookies.remove('jwt');
    console.log(err.response);
    dispatch({ type: CLEAR_USER });
    dispatch({ type: AUTH_ERROR });
  }
};

//==== Login a User
export const register = (newUser) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(newUser);

  try {
    const res = await axios.post('/api/v1/users/signup', body, config);
    dispatch(setAlert('Success Register', 'success'));
    Cookies.set('jwt', res.data.token, { expires: 7 });
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
    Cookies.remove('jwt');
    dispatch({ type: CLEAR_USER });
    dispatch({ type: AUTH_ERROR });
  }
};

//==== Logout user
export const logout = () => (dispatch) => {
  Cookies.remove('jwt');
  dispatch({ type: USER_LOGOUT });
};

//===== UPDATE THE CURRENT USE
export const updateCurrentUser = (name, email, photo) => async (dispatch) => {
  const formData = new FormData();
  formData.append('photo', photo);
  formData.append('name', name);
  formData.append('email', email);

  try {
    const res = await axios.patch('/api/v1/users/updateMe', formData);
    dispatch(setAlert('User Updated Successfully', 'success'));
    dispatch({
      type: UPDATE_CURRENT_USER,
      payload: res.data.data.user,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
    // Cookies.remove('jwt');
  }
};
//===== UPDATE THE CURRENT USER'S PASSWORD
export const changePassword = (newFormData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(newFormData);
  try {
    const res = await axios.patch(
      '/api/v1/users/updateMyPassword',
      body,
      config
    );
    dispatch(setAlert('Password update Success', 'success'));
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: res.data.data.user,
    });
    dispatch({ type: USER_LOGOUT });
    // Cookies.remove('jwt');
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'error'));
  }
};
