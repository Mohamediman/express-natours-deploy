import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectAuthenticated } from '../../redux/auth/auth.selectors';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: selectAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
