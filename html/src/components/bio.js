import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Box from "./box"
import PortraitImage from "./portrait-image"

const Bio = () => (
  <Box>
    <div>
      <div>
        <PortraitImage width={100} height={100} />
      </div>
      <div>
        <h2>Halvor Fladsrud Bø</h2>
        <p>Complex codes is a blog written by Halvor Fladsrud Bø.</p>
        <Link to="/about/">Halvor Fladsrud Bø</Link>
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
