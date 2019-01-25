import React from 'react';
import styled from 'styled-components';

const EmailBlockWrapper = styled.div`
  height: 380px;
  color: #2699fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const EmailBlockContent = styled.div`
  text-align: left;
  input {
    border: 1px solid #bce0fd;
    border-radius: 4px;
    padding: 11px 16px 12px;
    color: #2699fb;
  }
  button {
    background: #0883eb;
    border: none;
    border-radius: 4px;
    padding: 14px 16px 16px;
    color: white;
    font-size: 12px;
    letter-spacing: 0.8px;
    vertical-align: 12%;
    margin-left: 8px;
  }
  button:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;

const EmailBlock = () => {
  return (
    <EmailBlockWrapper>
      <EmailBlockContent>
        <strong>Subscribe via Email</strong>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia
        </p>
        <form>
          <input type="email" placeholder="email address" />
          <button>SUBSCRIBE</button>
        </form>
      </EmailBlockContent>
    </EmailBlockWrapper>
  );
};

export default EmailBlock;
