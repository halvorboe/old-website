import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Box from "./box"
import PortraitImage from "./portrait-image"

const Bio = () => (
  <Box>
    <div style={{display: "flex", flexDirection: "row"}}>
      <div style={{padding: '20px 10px 20px 30px'}}>
        <PortraitImage width={150} height={150} />
      </div>
      <div  style={{padding: 20}}>
        <h2></h2>
        <p>
          Written by me - <strong>Halvor Fladsrud Bø</strong>. I'm a student living in Trondheim, Norway. The goal of the blog is to share my
          passion for 'niche' topics with other people. That includes: datastores, datastructures, distributed systems and software engineering. <Link to="/about/"><strong>Read more...</strong></Link></p>
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
