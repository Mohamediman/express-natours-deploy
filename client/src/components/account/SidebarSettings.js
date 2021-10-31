import React from 'react';
import { Link } from 'react-router-dom';

import {
  HiOutlineCog,
  HiOutlineBriefcase,
  HiOutlineStar,
  HiCreditCard,
  HiOutlineMap,
  HiOutlineUsers,
} from 'react-icons/hi';

const SidebarSettings = () => {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li className="side-nav--active">
          <Link to="#">
            {' '}
            <HiOutlineCog />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/bookings/my-tours">
            <HiOutlineBriefcase />
            My Bookings
          </Link>
        </li>
        <li>
          <Link to="#!">
            {' '}
            <HiOutlineStar />
            My Reviews
          </Link>
        </li>
        <li>
          <Link to="#!">
            <HiCreditCard />
            Billing
          </Link>
        </li>
      </ul>

      <div className="admin-nav">
        <h5 className="admin-nav__heading">Admin</h5>
        <ul className="side-nav">
          <li>
            <Link to="#!">
              {' '}
              <HiOutlineMap />
              Manage tours
            </Link>
          </li>
          <li>
            <Link to="#!">
              {' '}
              <HiOutlineUsers />
              Manage users
            </Link>
          </li>
          <li>
            <Link to="#!">
              <HiOutlineStar />
              Manage reviews
            </Link>
          </li>
          <li>
            <Link to="#!">
              <HiOutlineBriefcase />
              Manage Bookings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarSettings;
