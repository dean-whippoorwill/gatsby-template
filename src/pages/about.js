import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styled from 'styled-components';
import aboutImage from '../images/aboutImage@2x.png';
import quotesIcon from '../images/quotes.svg';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const AboutContent = styled.div`
  flex-grow: 1;
  width: 86%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40fr 60fr;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
  color: #2699fb;
`;
const LeftColumn = styled.div`
  @media (max-width: 599px) {
    display: none;
  }
  align-self: center;
`;
const RightColumn = styled.div`
  align-self: center;
  h1 {
    font-family: serif;
  }
  margin: 0 16px 0 56px;
`;

const About = () => (
  <AboutWrapper>
    <Header />
    <AboutContent>
      <LeftColumn>
        <img
          src={aboutImage}
          alt="About Image"
          style={{
            width: '360px',
            marginBottom: '0',
          }}
        />
      </LeftColumn>
      <RightColumn>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
        <svg
          style={{
            height: '16px',
            width: '16px',
          }}
        >
          <use xlinkHref={`#${quotesIcon.id}`} />
        </svg>
        <p
          style={{ fontStyle: 'italic', fontFamily: 'serif', fontSize: '20px' }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa.
        </p>
      </RightColumn>
    </AboutContent>
    <Footer />
  </AboutWrapper>
);

export default About;
