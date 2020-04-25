import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <p>Categories</p>
    <p>Blog posts</p>
  </Layout>
)

export default IndexPage
