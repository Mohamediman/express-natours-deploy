import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import Headers from './components/header/Header';
import Tours from './components/tours/Tours';
import TourDetails from './components/tourDetails/TourDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Account from './components/account/Account';
import BookingSuccess from './components/bookings/BookingSuccess';
import MyBookings from './components/bookings/MyBookings';

import Footer from './components/footer/Footer';
import Alert from './alerts/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import { getAllTours, loadTour } from './actions/tours';
import { loadUser } from './actions/auth';
import setAuthtoken from './utils/SetAuthToken';
import store from './Store';

import './App.css';

const App = () => {
  console.log('get cookie without passing a name:', Cookies.get());
  if (Cookies.get('jwt')) {
    console.log('cookies under the if');
    console.log(Cookies.get('jwt'));
    console.log('cookies under the if');
    setAuthtoken(Cookies.get('jwt'));
  }

  console.log('Cookies check from the App:', Cookies.get('jwt'));

  if (Cookies.get('jwt')) {
    store.dispatch(loadUser());
  }

  // if(Cookies.get('jwt' !== " " )) {
  //   store.dispatch(loadUser());
  // }

  useEffect(() => {
    store.dispatch(getAllTours());
    store.dispatch(loadTour());

    // eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Headers />
        <Alert />
        <Switch>
          <PrivateRoute exact path="/me" component={Account} />
          <PrivateRoute
            exact
            path="/bookings/my-tours"
            component={MyBookings}
          />
          <Route
            exact
            path="my-tours/:tourId/:userId/:price"
            component={BookingSuccess}
          />
          <Route exact path="/my-tours" component={BookingSuccess} />
          <Route exact path="/" component={Tours} />
          <Route exact path="/tour/:slug" component={TourDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
