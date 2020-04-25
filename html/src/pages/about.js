import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import PortraitImage from "../components/portrait-image"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ display: `flex`, flexDirection: `row`, height: 500, margin: 0, padding: 0}}>
      <div
        style={{
          margin: `0 -150px 0 0`,
          position: 'relative',
          top: 100,
        }}
      >
        <PortraitImage width={'300px'} height={'300px'} />
      </div>
      <Box>
        <div style={{padding: '100px 100px 100px 200px'}}>
        <h1>Halvor Fladsrud Bø (21)</h1>
        <p>Software Engineer, currently living in Trondheim, Norway. Will be moving to London soon. This does not need to make any sense.</p>
        </div>
      </Box>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
      <h1>This is the timeline</h1>
    </div>
  </Layout>
)

export default SecondPage
