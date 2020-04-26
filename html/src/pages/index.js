import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Button from "../components/button"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const IndexPage = ({ data, locations }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      <h1>What's new?</h1>

      {posts.slice(0, 4).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: `#333` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} - {node.frontmatter.state}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <h1>What's popular?</h1>
      {posts.slice(0, 4).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: `#333` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} - {node.frontmatter.state}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            state
          }
        }
      }
    }
  }
`
