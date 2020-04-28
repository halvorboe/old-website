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
          {node.frontmatter.date} <span style={{color: "#FF8939"}}>{node.frontmatter.draft ? "| DRAFT" : "" }</span>
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
  console.log(data)
  const postsByTime = data.time.edges
  const postsByViews = data.views.edges
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
        {postsByTime.slice(0, 4).map(it => (
          <div style={{ flex: "0 47%" }}>
            {" "}
            <Post node={it.node} />
          </div>
        ))}
      </div>
      <h1>What's popular?</h1>
      {postsByViews.map(it => (
        <Post node={it.node} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    time: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            draft
          }
        }
      }
    }
    views: allMarkdownRemark(sort: { fields: [frontmatter___views], order: DESC }) {
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
            draft
          }
        }
      }
    }
  }
`
