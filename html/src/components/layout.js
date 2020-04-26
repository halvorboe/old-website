/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "100%",
          maxWidth: "800px",
          minHeight: "100vh",
        }}
      >
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <footer
        style={{
          color: "white",
          backgroundColor: "#FF8939",
          padding: "50px 0 ",
        }}
      >
        <div style={{ margin: "auto", width: "100%", maxWidth: "800px" }}>
          <strong>
            © {new Date().getFullYear()}, Built with {` `}{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </strong>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
