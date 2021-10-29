import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import Headers from './components/header/Header';
import Tours from './components/tours/Tours';
import TourDetails from './components/tourDetails/TourDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Account from './components/account/Account';
import MyBookings from './components/bookings/MyBookings';

import Footer from './components/footer/Footer';
import Alert from './alerts/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import { getAllTours, loadTour } from './redux/tours/tours.action';
import { loadUser } from './redux/auth/auth.action';
// import { loadUser } from './actions/auth';
import setAuthtoken from './utils/SetAuthToken';
import store from './redux/Store';

import './App.css';

const App = () => {
  if (Cookies.get('jwt')) {
    setAuthtoken(Cookies.get('jwt'));
    store.dispatch(loadUser());
  }

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
