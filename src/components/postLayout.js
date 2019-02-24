import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Archive from './archive';
import styled from 'styled-components';

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 80fr 20fr;
  padding: 0 36px;
  color: ${props => props.theme.primaryColor};
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

class postLayout extends Component {
  state = {};
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <PostWrapper>
          <div>
            <h1
              style={{
                fontFamily: 'serif',
                fontSize: '48px',
              }}
            >
              {markdownRemark.frontmatter.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </div>
          <Archive />
        </PostWrapper>
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
