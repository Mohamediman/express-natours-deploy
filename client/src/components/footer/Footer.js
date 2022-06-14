import React from 'react';
import { Link } from 'react-router-dom';
import LogoGreen from '../../img/logo-green.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img src={LogoGreen} alt="logo" />
        </Link>
      </div>
      <ul className="footer__nav">
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Download apps</Link>
        </li>
        <li>
          <Link to="/">Become a guide</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Mohamed Iman Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
