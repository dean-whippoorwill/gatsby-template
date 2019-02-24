import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../images/placeholderImage.svg';
import { Link } from 'gatsby';

const SaleWrapper = styled.div`
  background: ${props => props.theme.primaryLight};
  height: 576px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    height: 400px;
  }
  color: white;
`;

const Column = styled.div`
  svg {
    height: 428px;
    width: 369px;
  }
  @media (max-width: 599px) {
    width: 100vw;
    height: 400px;
    svg {
      width: 90%;
      opacity: 0.4;
    }
    position: ${props => (props.top === true ? 'absolute' : 'relative')};
    justify-self: center;
    align-self: center;
    text-align: center;
  }
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  padding: 36px 24px;
  div {
    margin: 36px 0 48px 0;
    height: auto;
  }
  @media (max-width: 599px) {
    div {
      margin: 12px 0 18px;
      height: 70%;
      div {
        height: 50%;
      }
    }
    h1 {
      margin-bottom: 0;
    }
  }
  h1 {
    font-family: serif;
    font-size: 40px;
  }
  a {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background: rgba(0, 0, 0, 0);
    border: 2px solid white;
    padding: 16px 16px;
    color: ${props => props.theme.primaryDark};
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
  }
  a:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

const SaleBlock = () => {
  return (
    <SaleWrapper>
      <Column>
        <svg
          style={{
            verticalAlign: '-25%',
          }}
        >
          <use xlinkHref={`#${placeholderImage.id}`} />
        </svg>
      </Column>
      <Column top={true}>
        <div>
          <div>
            <h1>It's that time of year again</h1>
          </div>
          <div>
            <Link to="/shop">SHOP NOW</Link>
          </div>
        </div>
      </Column>
    </SaleWrapper>
  );
};

export default SaleBlock;
