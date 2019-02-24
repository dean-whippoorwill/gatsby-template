import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { lighten, darken } from 'polished';

import Header from './header';
import Footer from './footer';

const themeVars = {
  primaryColor: '#2699FB', // #2699FB
};

const theme = {
  primaryColor: themeVars.primaryColor,
  primaryLight: lighten(0.2, themeVars.primaryColor),
  primaryLighter: lighten(0.4, themeVars.primaryColor),
  primaryDark: darken(0.2, themeVars.primaryColor),
};

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
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Header /> {/* siteTitle={data.site.siteMetadata.title} */}
          <PageBody>{children}</PageBody>
          <Footer />
        </LayoutWrapper>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
