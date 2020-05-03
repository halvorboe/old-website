import React from "react"

import Logo from "./Logo"

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <header>
        <Logo />
      </header>
      {children}
      <footer>Made in NORWAY with gatsby and Love</footer>
    </div>
  )
}

export default Layout
