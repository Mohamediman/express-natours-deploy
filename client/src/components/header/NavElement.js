import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { logout } from './../../redux/auth/auth.action';
import {
  selectAuthenticated,
  selectAuthUser,
} from '../../redux/auth/auth.selectors';

const NavElement = ({ isAuthenticated, user, logout }) => {
  const userLinks = (
    <nav className="nav nav--user">
      <a href="/" className="nav__el nav__el--logout" onClick={logout}>
        Log Out
      </a>
      <Link to="/me" className="nav__el">
        {user && (
          <img
            src={`/img/users/${user.photo}`}
            alt="user"
            className="nav__user-img"
          />
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
const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectAuthenticated,
  user: selectAuthUser,
});
export default connect(mapStateToProps, { logout })(NavElement);
