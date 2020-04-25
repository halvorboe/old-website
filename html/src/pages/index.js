import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Button from "../components/button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <div style={{display: "flex",  margin: 50, alignItems: "center",
  justifyContent: "center"}}>
    <Button active={true}>All (11)</Button>
    <Button>Datastores (5)</Button>
    <Button>Random (2)</Button>
   </div> 
    <h1>This is a heading</h1>
    <p>Blog posts</p>
  </Layout>
)

export default IndexPage
