import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import Spinner from '../spinner/Spinner';

import { connect, useSelector } from 'react-redux';
import { logout } from './../../redux/auth/auth.action';
import {
  selectAuthenticated,
  selectAuthUser,
} from '../../redux/auth/auth.selectors';

const NavElement = ({ logout }) => {
  const structuredSelector = createStructuredSelector({
    isAuthenticated: selectAuthenticated,
    user: selectAuthUser,
  });

  const { isAuthenticated, user } = useSelector(structuredSelector);

  const userLinks = (
    <nav className="nav nav--user">
      <Link to="/" className="nav__el nav__el--logout" onClick={logout}>
        Log Out
      </Link>
      <Link to="/me" className="nav__el">
        {user ? (
          <img
            src={`/img/users/${user.photo}`}
            alt="user"
            className="nav__user-img"
          />
        ) : (
          <Spinner />
        )}
        {user && user.name && <span>{user.name.split(' ')[0]}</span>}
      </Link>
    </nav>
  );

  const guestLinks = (
    <nav className="nav nav--user">
      <Link to="/login" className="nav__el">
        Log in
      </Link>
      <Link to="/signup" className="nav__el nav__el--cta">
        Sign up
      </Link>
    </nav>
  );

  return <Fragment>{!isAuthenticated ? guestLinks : userLinks}</Fragment>;
};

export default connect(null, { logout })(NavElement);
