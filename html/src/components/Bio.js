import React from "react"

import Portrait from "./Portrait"
import Box from "./Box"

const Bio = () => {
  return (
    <Box light>
      <Portrait />
      <h2>The Writer</h2>
      <h1>Halvor Fladsrud Bø (21)</h1>
      <p>
        I'm currently a full-time Computer Engineering student at NTNU in
        Trondheim, Norway. This blog is a place where I can 'share' my niche
        interests without loosing friends.
      </p>
    </Box>
  )
}

export default Bio
