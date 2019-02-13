import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #2699fb;
  width: 100vw;
  word-break: break-word;
  label {
    font-size: 12px;
    font-weight: 700;
    margin-top: 20px;
    text-transform: uppercase;
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;
const LeftColumn = styled.div`
  padding-right: 36px;
  justify-self: end;
  @media (max-width: 599px) {
    justify-self: stretch;
    padding: 0 32px;
    width: 100%;
  }
  width: 70%;
  input,
  label {
    display: block;
  }
  input,
  textarea {
    width: 100%;
    border: 1px solid #bce0fd;
    color: #2699fb;
    border-radius: 4px;
    padding-left: 10px;
  }
  input {
    height: 48px;
  }
`;
const RightColumn = styled.div`
  padding-top: 72px;
  @media (max-width: 599px) {
    justify-self: stretch;
    padding: 0 32px;
    iframe {
      width: calc(100vw - 64px);
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactWrapper>
        <LeftColumn>
          <h1>Contact Us</h1>
          <form>
            <label>NAME</label>
            <input type="text" />
            <label>EMAIL ADDRESS</label>
            <input type="email" />
            <label>SUBJECT</label>
            <input type="text" />
            <label>MESSAGE</label>
            <textarea rows="4" cols="50" name="comment" form="usrform" />
          </form>
        </LeftColumn>
        <RightColumn>
          <label>Hours</label>
          <p>
            Monday-Friday 10am-8pm <br />
            Saturday 10am-6pm
          </p>
          <label>Phone</label>
          <p>(555) 555 - 5555</p>
          <label>EMAIL</label>
          <p>buisnessname@biz.com</p>
          <label>Address</label>
          <p>buisnessname@biz.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7005860537456!2d-84.4376027490248!3d38.00744377961814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884250064c73bc87%3A0xb865c8597267139!2sLexington+Public+Library%2C+Eastside+Branch!5e0!3m2!1sen!2sus!4v1549127255766"
            width="400"
            height="300"
            frameborder="0"
            style={{ border: '0' }}
            allowfullscreen
          />
        </RightColumn>
      </ContactWrapper>
    </Layout>
  );
};

export default Contact;
