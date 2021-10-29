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
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Mohamed Iman Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
