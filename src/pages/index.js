import React from "react";

import Bio from "../components/Bio";
import Box from "../components/Box";
import PostPreview from "../components/PostPreview";
import Layout from "../components/Layout";

import { FaFire, FaCalendar } from "react-icons/fa";

const IndexPage = ({ data, locations }) => {
  const trending = data.trending.edges.slice(0, 3);
  const months = groupAllPosts(data.all.edges);
  return (
    <Layout>
      <div>
        <Bio />
      </div>
      <div>
        <div className="m-y">
          <Box header="Trending posts" icon={<FaFire />} row>
            {trending.map((post, index) => {
              return (
                <div className={(index + 1) % 3 !== 0 ? "item" : "last"}>
                  <PostPreview key={post.node.fields.slug} post={post} />
                </div>
              );
            })}
          </Box>
        </div>
      </div>
      <div>
        <div className="">
          {months.map((month) => {
            return (
              <Box
                key={month.tag}
                header={month.tag}
                icon={<FaCalendar />}
                light
              >
                {month.posts.map((post) => {
                  const style = post.isMore
                    ? { borderBottom: "2px solid #fff" }
                    : {};
                  return (
                    <div style={style}>
                      <PostPreview key={post.node.fields.slug} post={post} />
                    </div>
                  );
                })}
              </Box>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

const groupAllPosts = (posts) => {
  const res = [];
  let month = null;
  for (const index in posts) {
    const post = posts[index];
    const postMonth = post.node.frontmatter.month;
    if (month !== null) {
      if (month.tag === postMonth) {
        month.posts[month.posts.length - 1].isMore = true;
        month.posts.push(post);
        continue;
      }
      month = null;
    }
    if (month === null) {
      month = {
        tag: postMonth,
        posts: [post],
      };
    }
    res.push(month);
  }
  return res;
};

export default IndexPage;

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
          }
        }
      }
    }
  }
`;
