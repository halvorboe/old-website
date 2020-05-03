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
          <h3>🔥{" "}Trending posts</h3>
          <Box row>
            {trending.map((post, index) => {
              console.log(index);
              const style = {};
              if ((index + 1) % 3 !== 0) {
                style["borderRight"] = "2px solid white"
              }
              return <div style={style}><PostPreview key={post.node.fields.slug} post={post} /></div>
            })}
          </Box>
        </div>
      </div>
      <div>
        <div>
          <h3>🗄{" "}Archive</h3>
          {months.map(month => {
            return (
              <Box key={month.tag} header={month.tag} light>
                {month.posts.map(post => {
                  const style = post.isMore ? {borderBottom: "2px solid #777"} : {};
                  return <div style={style}>
                    <PostPreview key={post.node.fields.slug} post={post} />
                  </div>
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
        month.posts[month.posts.length - 1].isMore = true
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
