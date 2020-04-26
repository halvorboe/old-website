import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import PortraitImage from "../components/portrait-image"
import Timeline from "../components/timeline"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        height: 500,
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          margin: `0 -150px 0 0`,
          position: "relative",
          top: 100,
        }}
      >
        <PortraitImage width={"300px"} height={"300px"} />
      </div>
      <Box>
        <div style={{ padding: "100px 100px 100px 200px" }}>
          <h1>Halvor Fladsrud Bø (21)</h1>
          <p>
            Software Engineer, currently living in Trondheim, Norway. Will be
            moving to London soon. This does not need to make any sense.
          </p>
        </div>
      </Box>
    </div>
    <div>
      <h1>What my goals are</h1>
      <p>I'm really passinate about a lot of stuff.</p>
    </div>
    <div>
      <h1>What I've done so far</h1>
      <div style={{ backgroundColor: "#eee", borderRadius: 10 }}>
        <Timeline />
      </div>
    </div>
  </Layout>
)

export default SecondPage
