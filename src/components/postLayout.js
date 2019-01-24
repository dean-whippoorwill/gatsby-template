import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

class postLayout extends Component {
  state = {};
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export default postLayout;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
