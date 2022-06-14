import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import NavElement from './NavElement';
import LogoWhite from './../../img/logo-white.png';

import setAuthtoken from '../../utils/SetAuthToken';

import { connect } from 'react-redux';
import { loadUser } from '../../redux/auth/auth.action';
import { getAllTours } from '../../redux/tours/tours.action';

const Header = ({ loadUser, getAllTours }) => {
  if (Cookies.get('jwt')) {
    setAuthtoken(Cookies.get('jwt'));
    loadUser();
  }

  useEffect(() => {
    getAllTours();

    //eslint-disable-next-line
  }, []);

  return (
    <header className="header">
      <Link to="/" className="nav__el">
        All tours
      </Link>
      <div className="header__logo">
        <Link to="/">
          <img src={LogoWhite} alt="Natours logo" />
        </Link>
      </div>
      <NavElement />
    </header>
  );
};

export default connect(null, { loadUser, getAllTours })(Header);
