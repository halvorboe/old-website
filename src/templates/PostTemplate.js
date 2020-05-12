import React from "react";

import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Analytics from "../components/Analytics";
import Box from "../components/Box";
import {Link} from "gatsby";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  console.log(previous)
  console.log(next)
  const style = {
    padding: 0,
    margin: 0,
    fontSize: 18,
    fontFamily: "Roboto Mono",
    minWidth: 300,
    textAlign: "center",
    margin: "0 20px",
  }

  return (
    <Layout>
      <section>
        <h2 style={{fontSize: 30, marginBottom: 0}}> {post.frontmatter.date}</h2>
        <h1 style={{fontSize: 70, marginTop: 0}}> {post.frontmatter.title}</h1>
      </section>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <Bio />
      <div style={{margin: "70px 0", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          { previous ? <Link to={previous.fields.slug}><Box><span style={style} ><b style={{color: "var(--contrast)"}}>{" Previous: "}</b>{previous.frontmatter.title}</span></Box></Link> : null }
          { next ? <Link to={next.fields.slug}><Box><span style={style}><b style={{color: "var(--contrast)"}}>{" Next: "}</b>{next.frontmatter.title}</span></Box></Link> : null }
        </div>
      {/* <Analytics /> */}
    </Layout>
  );
};

export default PostTemplate;

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
`;
