import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import { Settigns } from './icons/settigns';
import { Search } from './icons/search';

const Navbar = props => {
  let location = useLocation();
  location = location.pathname.split('/');
  const { handleSearch } = props;
  const [value, setValue] = React.useState('');

  return (
    <div className="nav">
      <div className="header">
        {location[1] === 'detail' && (
          <Link to="/">
            <div className="back">
              <div className="arrow"></div>Back
            </div>
          </Link>
        )}
        <h1>SHOWS</h1>
      </div>
      <div>
        <input
          className="search"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <div className="options">
        <div onClick={() => alert('Hello, i am settings')}>
          <Settigns />
        </div>
        <div onClick={() => handleSearch(value)}>
          <Search />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Navbar;
