import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import PortraitImage from "../components/portrait-image"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ display: `flex`, flexDirection: `row`, height: 500 }}>
      <div
        style={{
          margin: `0 -150px 0 0`,
          position: "relative",
          top: "0%",
          transform: "translateY(25%)",
        }}
      >
        <PortraitImage width={300} height={300} />
      </div>
      <Box></Box>
    </div>
  </Layout>
)

export default SecondPage
