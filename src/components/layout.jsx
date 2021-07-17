import Profile from "./Profile"

import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {

  return (
        <>
        <aside>
          <Profile />
        </aside>
        <main>{children}</main>
        </>
  )  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
