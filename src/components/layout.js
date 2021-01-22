/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={`BLOG`} />
      <div
        className="container"
      >
        <content>{children}</content>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
