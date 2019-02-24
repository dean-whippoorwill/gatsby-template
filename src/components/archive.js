import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { collection: { eq: "posts" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const ArchiveWrapper = styled.aside`
  ul {
    list-style: none;
    margin-left: 0;
    a {
      color: ${props => props.theme.primaryColor};
      text-decoration: none;
    }
  }
  h3 {
    margin-bottom: 12px;
  }
`;

const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <ArchiveWrapper>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </ArchiveWrapper>
      </>
    )}
  />
);

export default Archive;
