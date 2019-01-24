import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../images/placeholderImage.svg';
import { Link } from 'gatsby';

const SaleWrapper = styled.div`
  background: rgba(59, 162, 251, 0.6);
  height: 576px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    height: 760px;
  }
  color: white;
`;

const Column = styled.div`
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
    color: #0883eb;
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
            height: '428px',
            width: '369px',
            verticalAlign: '-25%',
          }}
        >
          <use xlinkHref={`#${placeholderImage.id}`} />
        </svg>
      </Column>
      <Column>
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
