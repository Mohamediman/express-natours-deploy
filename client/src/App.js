import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/footer/Footer';
import PrivateRoute from './components/routing/PrivateRoute';

import Alert from './alerts/Alert';
import Header from './components/header/Header';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Spinner from './components/spinner/Spinner';

const Tours = lazy(() => import('./components/tours/Tours'));
const TourDetails = lazy(() => import('./components/tourDetails/TourDetails'));
const Login = lazy(() => import('./components/auth/Login'));
const Signup = lazy(() => import('./components/auth/Signup'));
const Account = lazy(() => import('./components/account/Account'));
const MyBookings = lazy(() => import('./components/bookings/MyBookings'));

const App = () => {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={Spinner}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
