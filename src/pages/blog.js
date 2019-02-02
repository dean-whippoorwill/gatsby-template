import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

class Blog extends Component {
  state = {};

  render() {
    const PREVIEW_QUERY = graphql`
      query BlogPostPreview {
        allMarkdownRemark(
          limit: 10
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { collection: { eq: "posts" } } }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
              }
            }
          }
        }
      }
    `;
    const BlogWrapper = styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    `;
    const BlogContent = styled.div`
      postion: relative;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      height: 100%;
      min-height: calc(100vh - 150px);
      padding: 24px 0 48px;
    `;
    const PostPreview = styled.div`
      height: 208px;
      @media (max-width: 599px) {
        height: 480px;
      }
      width: 86%;
      margin: 24px auto 0;

      display: grid;
      grid-template-columns: 30fr 70fr;
      @media (max-width: 599px) {
        grid-template-columns: 1fr;
      }
    `;
    const PostImage = styled.div`
      @media (max-width: 599px) {
        height: 280px;
      }
      background: #7fc4fd;
      width: 100%;
      height: 100%;
    `;
    const PreviewText = styled.div`
      padding: 8px 20px 8px 16px;

      color: #2699fb;
      align-self: center;
      > * {
        :nth-child(2) {
          margin-bottom: 16px;
        }
      }
      p {
        font-size: 14px;
      }
      h1 {
        font-size: 32px;
        font-family: serif;
        margin-bottom: 6px;
      }
      a {
        text-decoration: none;
        color: #2699fb;
      }
      a:hover {
        color: #0484f1;
      }
    `;
    return (
      <BlogWrapper>
        <Header />
        <BlogContent>
          <div>
            <StaticQuery
              query={PREVIEW_QUERY}
              render={({ allMarkdownRemark }) =>
                allMarkdownRemark.edges.map(({ node }) => (
                  <PostPreview key={node.frontmatter.slug}>
                    <PostImage />
                    <PreviewText>
                      <Link to={`/posts/${node.frontmatter.slug}`}>
                        <h1>{node.frontmatter.title}</h1>
                      </Link>
                      <p>{node.frontmatter.date}</p>
                      <p>
                        {node.excerpt}...
                        <Link to={`/posts/${node.frontmatter.slug}`}>
                          <strong>READ POST</strong>
                        </Link>
                      </p>
                    </PreviewText>
                  </PostPreview>
                ))
              }
            />
          </div>
        </BlogContent>
        <Footer />
      </BlogWrapper>
    );
  }
}

export default Blog;
