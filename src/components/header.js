import { Link, NavLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
    <nav>
      <h2>
        {siteTitle}
      </h2>
      <ul>
        <li> Portfolio </li>
        <li> Tags </li>
        <li> About Me</li>
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
