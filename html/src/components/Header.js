import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "./LogoImage"
import Button from "./Button"
import { FaSearch } from "react-icons/fa"

const Header = () => (
  <header>
    <div
      style={{
        padding: "100px 0 50px 0",
        display: "flex",
        justifyContent: "space-between",
        margin: 0,
      }}
    >
      <div style={{padding: "10px"}}>
        <Link to="/">
          <LogoImage />
        </Link>
      </div>
      <div>
        <Button>Search<FaSearch style={{fontSize: 20, margin: '0 0 0 15px', position: "relative", top: 3}} /></Button>
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
