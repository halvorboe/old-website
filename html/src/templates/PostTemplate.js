import React from "react"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import Analytics from "../components/Analytics"
import Box from "../components/Box"

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <section>
      <h2> {post.frontmatter.date}</h2>
      <h1> {post.frontmatter.title}</h1>
      </section>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <Bio />
      {/* <Analytics /> */}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 400)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        draft
      }
    }
  }
`
