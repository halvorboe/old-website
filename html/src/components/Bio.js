import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Box from "./Box"
import PortraitImage from "./PortraitImage"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Bio = () => (
  <Box>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: 0, margin: 30 }}>
        <PortraitImage width={170} height={170} />
      </div>
      <div style={{ padding: 0, margin: 30 }}>
        <p>
          Written by me - <strong>Halvor Fladsrud Bø</strong>. I'm currently a
          full-time Computer Engineering student at NTNU in Trondheim, Norway.
          This blog is a place where I can 'share' my niche interests without
          loosing friends.{" "}
          <Link to="/about/">
            <strong>Read more...</strong>
          </Link>
        </p>
        <h3 style={{ padding: 0, margin: 0, marginTop: -10 }}>
          <FaLinkedin /> <FaGithub />
        </h3>
      </div>
    </div>
  </Box>
)

Bio.propTypes = {
  siteTitle: PropTypes.string,
}

Bio.defaultProps = {
  siteTitle: ``,
}

export default Bio
