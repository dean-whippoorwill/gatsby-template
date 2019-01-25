import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';
import twitterIcon from '../images/twitter.svg';
import arrowIcon from '../images/arrow.svg';
import templateLogo from '../images/template-logo.png';

const FooterWrapper = styled.div`
  height: 70px;
  background: #2699fb;
  color: white;
  display: grid;
  grid-template-columns: 1fr 120px;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  > * {
    :first-child {
      @media (max-width: 599px) {
        display: none;
      }
    }
  }
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  ul {
    display: block;
  }
  p {
    margin-bottom: 0;
    font-weight: 100;
    letter-spacing: 0.8px;
    font-size: 14px;
    @media (max-width: 599px) {
      margin-left: 24px;
      font-size: 12px;
    }
  }
`;
const ColumnRight = styled.div`
  background: #7fc4fd;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: rotate(90deg);
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.3) rotate(90deg);
  }
  @media (max-width: 599px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  padding-right: 24px;
  div {
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    margin-left: 12px;
    @media (max-width: 599px) {
      margin-left: 24px;
    }
  }
  div:hover {
    transform: scale(1.2);
  }
`;

class Footer extends Component {
  state = {};

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <FooterWrapper>
        <ColumnLeft>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              padding: `6px 0 0 24px`,
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
              <a href="https://www.instagram.com/">
                <svg
                  style={{
                    height: '20px',
                    width: '20px',
                    verticalAlign: '-15%',
                  }}
                >
                  <use xlinkHref={`#${instagramIcon.id}`} />
                </svg>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <svg
                  style={{
                    height: '20px',
                    width: '20px',
                    verticalAlign: '-15%',
                  }}
                >
                  <use xlinkHref={`#${facebookIcon.id}`} />
                </svg>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <svg
                  style={{
                    height: '20px',
                    width: '20px',
                    verticalAlign: '-15%',
                  }}
                >
                  <use xlinkHref={`#${twitterIcon.id}`} />
                </svg>
              </a>
            </div>
          </SocialLinks>
        </ColumnLeft>
        <ColumnRight>
          <button
            onClick={() => {
              this.scrollToTop();
            }}
          >
            <svg
              style={{ height: '24px', width: '24px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${arrowIcon.id}`} />
            </svg>
          </button>
        </ColumnRight>
      </FooterWrapper>
    );
  }
}

export default Footer;
