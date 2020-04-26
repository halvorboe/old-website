import React from "react"

const Footer = () => {
  return (
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
  )
}

export default Footer
