import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import NavElement from './NavElement';
import LogoWhite from './../../img/logo-white.png';

import { connect } from 'react-redux';
import { loadUser } from '../../redux/auth/auth.action';
import { selectAuthenticated } from '../../redux/auth/auth.selectors';

const Header = ({ isAuthenticated, loadUser }) => {
  useEffect(() => {
    if (Cookies.get('jwt')) {
      loadUser();
      console.log('Called the loadUser');
    }
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
const mapStateToProps = (state) => ({
  isAuthenticated: selectAuthenticated(state),
});
export default connect(mapStateToProps, { loadUser })(Header);
