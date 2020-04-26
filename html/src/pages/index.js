import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Bio from "../components/Bio"
import Button from "../components/Button"
import SEO from "../components/Seo"
import { rhythm } from "../utils/typography"

const Post = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <header>
        <h4
          style={{
            marginBottom: rhythm(1 / 2),
            marginTop: rhythm(1 / 2),
          }}
        >
          {node.frontmatter.date} - {node.frontmatter.state}
        </h4>
        <h3
          style={{
            marginBottom: rhythm(1),
            marginTop: rhythm(1 / 2),
          }}
        >
          <Link
            style={{ boxShadow: `none`, color: `#333` }}
            to={node.fields.slug}
          >
            {title}
          </Link>
        </h3>
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
}

const IndexPage = ({ data, locations }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      <h1>What's new?</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {posts.slice(0, 4).map(it => (
          <div style={{ flex: "0 47%" }}>
            {" "}
            <Post node={it.node} />
          </div>
        ))}
      </div>
      <h1>What's popular?</h1>
      {posts.slice(0, 10).map(it => (
        <Post node={it.node} />
      ))}
      <p>Use search to find more</p>
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
