import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';
import twitterIcon from '../images/twitter.svg';
import templateLogo from '../images/template-logo.png';

const FooterWrapper = styled.div`
  height: 70px;
  background: #2699fb;
  color: white;
  display: grid;
  grid-template-columns: 1fr 120px;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  a {
    padding: 6px 0 0 24px;
  }
  ul {
    display: block;
  }
  p {
    margin-bottom: 0;
    font-weight: 100;
    letter-spacing: 0.8px;
    font-size: 14px;
  }
`;
const ColumnRight = styled.div`
  background: #7fc4fd;
`;

const SocialLinks = styled.div`
  display: flex;
  padding-right: 24px;
  div {
    margin-left: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ColumnLeft>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img
            src={templateLogo}
            alt="Template Logo"
            style={{
              width: '100px',
              marginBottom: '0',
            }}
          />
        </Link>

        <div>
          <p>COPYRIGHT WHIPPOORWILL DESIGN CO, 2019</p>
        </div>
        <SocialLinks>
          <div>
            <svg
              style={{ height: '20px', width: '20px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${instagramIcon.id}`} />
            </svg>
          </div>
          <div>
            <svg
              style={{ height: '20px', width: '20px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${facebookIcon.id}`} />
            </svg>
          </div>
          <div>
            <svg
              style={{ height: '20px', width: '20px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${twitterIcon.id}`} />
            </svg>
          </div>
        </SocialLinks>
      </ColumnLeft>
      <ColumnRight>
        <p>/\</p>
      </ColumnRight>
    </FooterWrapper>
  );
};

export default Footer;
