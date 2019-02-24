import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';

const ProductWrapper = styled.div`
  width: 360px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 24px 36px 0;
  @media (max-width: 599px) {
    margin: 0 0 36px 0;
  }
`;
const ProductImage = styled.div`
  background: ${props => props.theme.primaryLight};
  height: 200px;
`;
const ProductInfo = styled.div`
  padding: 24px 30px;
  width: 100%;
  span {
    float: right;
  }
  p,
  a {
    font-size: 14px;
  }
  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    font-weight: 600;
  }
`;

const ProductCard = props => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <ProductWrapper style={styles}>
          <ProductImage />
          <ProductInfo>
            <h4>
              {props.title}
              <span>{`$${props.price}`}</span>
            </h4>
            <p>{props.description}</p>
            <a href="#">VIEW ITEM</a>
          </ProductInfo>
        </ProductWrapper>
      )}
    </Spring>
  );
};

export default ProductCard;
