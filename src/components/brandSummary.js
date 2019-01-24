import React from 'react';
import styled from 'styled-components';

const BrandSummaryWrapper = styled.div`
  background: #2699fb;
  height: 380px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const BrandSummaryContent = styled.div`
  height: 30%;
  width: 56%;
  text-align: center;
  div {
    flex-grow: 1;
    margin: 0 auto;
  }
  h1 {
    font-family: serif;
  }
`;

const BrandSummary = () => {
  return (
    <BrandSummaryWrapper>
      <BrandSummaryContent>
        <div>
          <h1>Quality is our Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </BrandSummaryContent>
    </BrandSummaryWrapper>
  );
};

export default BrandSummary;
