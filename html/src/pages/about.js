import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Box from "../components/Box"
import PortraitImage from "../components/PortraitImage"
import Timeline from "../components/Timeline"

const About = () => (
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
      <h1>What I like</h1>
      <p>I have a long list of topics I enjoy. Designing this blog has been really fun.</p>
    </div>
    <div>
      <h1>What I've done so far</h1>
      <p>Below you can see a timeline of my programming jurney.</p>
      <div
        style={{
          margin: "50px 0",
          backgroundColor: "#FAFAFA",
          width: "100vw",
          borderRadius: 10,
          position: "absolute",
          left: 0,
        }}
      >
        <Timeline />
      </div>
    </div>
  </Layout>
)

export default About
