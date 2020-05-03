import React from "react"

import Logo from "./Logo"

import "../site.css"

const Layout = ({ children }) => {
  return (
    <div>
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <header style={{ margin: "100px 0 40px 0" }}>
        <Logo />
      </header>
    </div>
    <div style={{width: "100%", height: "10px", margin: "60px 0", backgroundColor: "#FF8939"}}/>
    <div style={{ maxWidth: 800, margin: "auto" }}>
      {children}
    </div>
    <div style={{width: "100%", height: "10px", margin: "60px 0", backgroundColor: "#FF8939"}}/>
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <footer  style={{ margin: "40px 0 100px 0" }}>
          <h3>Made in 🇳🇴 with gatsby and 🤟</h3>
          </footer>
    </div>
    </div>
  )
}

export default Layout
