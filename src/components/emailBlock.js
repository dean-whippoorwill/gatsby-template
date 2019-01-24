import React from 'react';
import styled from 'styled-components';

const EmailBlockWrapper = styled.div`
  height: 70px;
  color: #2699fb;
`;

const EmailBlock = () => {
  return (
    <EmailBlockWrapper>
      <strong>Subscribe via Email</strong>
    </EmailBlockWrapper>
  );
};

export default EmailBlock;
