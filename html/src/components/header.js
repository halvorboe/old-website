import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "./logo-image"
import Button from "./button"
const Header = () => (
  <header>
    <div
      style={{
        padding: "120px 0 70px 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Link to="/">
          <LogoImage />
        </Link>
      </div>
      <div>
        <Button>Search</Button>
      </div>
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
