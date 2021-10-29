import React from 'react';

import { FaSearch } from 'react-icons/fa';

const SearchForm = () => (
  <nav className="nav nav--tours">
    <form className="nav__search">
      <button className="nav__search-btn">
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="Search tours"
        className="nav__search-input"
      />
    </form>
  </nav>
);

export default SearchForm;
