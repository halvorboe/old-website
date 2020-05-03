import React from "react"

import Bio from "../components/Bio"
import Box from "../components/Box"
import PostPreview from "../components/PostPreview"
import Layout from "../components/Layout"

const IndexPage = ({ data, locations }) => {
  const trending = data.trending.edges.slice(0, 3)
  const months = groupAllPosts(data.all.edges)
  return (
    <Layout>
      <div>
        <Bio />
      </div>
      <div>
        <div>
          <h1>Trending posts</h1>
          <Box>
            {trending.map(post => (
              <PostPreview key={post.node.fields.slug} post={post} />
            ))}
          </Box>
        </div>
      </div>
      <div>
        <div>
          <h1>Archive</h1>
          {months.map(month => {
            console.log(month)
            return (
              <Box key={month.tag} header={month.tag} light>
                {month.posts.map(post => {
                  console.log(post)
                  return <PostPreview key={post.node.fields.slug} post={post} />
                })}
              </Box>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

const groupAllPosts = posts => {
  const res = []
  let month = null
  for (const index in posts) {
    const post = posts[index]
    const postMonth = post.node.frontmatter.month
    if (month !== null) {
      if (month.tag === postMonth) {
        month.posts.push(post)
        continue
      }
      month = null
    }
    if (month === null) {
      month = {
        tag: postMonth,
        posts: [post],
      }
    }
    res.push(month)
  }
  return res
}

export default IndexPage

export const pageQuery = graphql`
  query {
    trending: allMarkdownRemark(
      sort: { fields: [frontmatter___views], order: DESC }
    ) {
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
    all: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            month: date(formatString: "MMMM YYYY")
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
