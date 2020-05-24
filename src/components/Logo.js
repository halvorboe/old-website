import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LogoImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "COMPLEX ; CODES.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />;
};

export default LogoImage;
