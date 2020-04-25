import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <h1>Complex Codes</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
