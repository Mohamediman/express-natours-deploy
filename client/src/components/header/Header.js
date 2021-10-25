import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import NavElement from './NavElement';
import SearchForm from './SearchForm';
import LogoWhite from './../../img/logo-white.png';

import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';

const Header = ({ isAuthenticated, loadUser }) => {
  useEffect(() => {
    if (Cookies.get('jwt')) {
      loadUser();
      console.log('Called the loadUser');
    }
    // if(Cookies.get('jwt') !== '') {
    //     loadUser();
    //     console.log("Called the loadUser");
    //   };

    //eslint-disable-next-line
  }, []);
  return (
    <header className="header">
      <a href="/" className="nav__el">
        All tours
      </a>
      {/* { isAuthenticated &&
                 <SearchForm /> 
            } */}

      <div className="header__logo">
        <a href="/">
          <img src={LogoWhite} alt="Natours logo" />
        </a>
      </div>
      <NavElement />
    </header>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loadUser })(Header);
