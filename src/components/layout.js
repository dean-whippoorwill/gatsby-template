import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

// import './layout.css';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
  overflow: hidden;
`;
const PageBody = styled.div`
  postion: relative;
  flex-grow: 1;
  height: 100%;
  min-height: calc(100vh - 150px);
  padding: 24px 0 48px;
  width: 100vw;
  overflow-x: hidden;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <Header /> {/* siteTitle={data.site.siteMetadata.title} */}
        <PageBody>{children}</PageBody>
        <Footer />
      </LayoutWrapper>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
