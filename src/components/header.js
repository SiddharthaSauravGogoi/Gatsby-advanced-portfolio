import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header
  >
    <nav>
      <Link to="/">
        <h2>
          {siteTitle}
        </h2>
      </Link>
      <ul>
        <Link to="/blog"> BLOG </Link>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
