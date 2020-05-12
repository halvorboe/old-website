import React from "react";

import Logo from "./Logo";
import {Link} from "gatsby"

import "../layout.css";

const Layout = ({ children }) => {
  return (
    <div style={{padding: "0 20px"}}>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <Link to="/"><header style={{ margin: "100px 0 40px 0" }}>
          <Logo />
        </header></Link>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "#FF8939",
          height: "5px",
          margin: "70px auto",
          borderRadius: "2.5px",
        }}
      />
      <div className="container">{children}</div>
      <div
        className="container"
        style={{
          backgroundColor: "#FF8939",
          height: "5px",
          margin: "70px auto",
          borderRadius: "2.5px",
        }}
      />
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <footer style={{ margin: "40px 0 100px 0" }}>
          <h3>Made in 🇳🇴 with gatsby and 🤟</h3>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
