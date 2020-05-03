import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node
  return (
    <Link to={fields.slug}>
      <h2>{frontmatter.date}</h2>
      <h1>{frontmatter.title}</h1>
      <p>{excerpt}</p>
    </Link>
  )
}

export default PostPreview
