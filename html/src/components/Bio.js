import React from "react"

import Portrait from "./Portrait"
import Box from "./Box"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Bio = () => {
  return (
    <div className="m-y">
    <Box light>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "-30px 30px -60px -30px" }}>
          <Portrait />
        </div>
        <div>
          <h3>The Writer</h3>
          <h1>Halvor Fladsrud Bø (21)</h1>
          <p>
            I'm currently a full-time Computer Engineering student at NTNU in
            Trondheim, Norway. This blog is a place where I can 'share' my niche
            interests without loosing friends.
          </p>
          <span className="icons" style={{padding: "0 100"}}>
            <FaLinkedin />{"            "}<FaGithub />{"            "}<FaEnvelope />
          </span>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default Bio
