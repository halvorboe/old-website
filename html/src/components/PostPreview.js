import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node
  return (
    <div style={{ margin: "15px 10px 30px 10px" }}>
      <Link to={fields.slug}>
        <h3>{frontmatter.date}</h3>
        <h2>{frontmatter.title}</h2>
        <p>{excerpt}</p>
      </Link>
    </div>
  )
}

export default PostPreview
