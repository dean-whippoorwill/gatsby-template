import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import templateLogo from '../images/template-logo.png';
import cartIcon from '../images/cart.svg';
import hamburgerIcon from '../images/hamburger.svg';

const HeaderWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.primaryColor};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  color: #fff;
  a {
    text-decoration: none;
  }
  img {
    margin: 0 24px 0 24px;
    vertical-align: middle;
  }
`;

const NavLinks = styled.div`
  @media (max-width: 599px) {
    opacity: ${props => (props.isVisible ? '1' : '0')};
    pointer-events: ${props => (props.isOpen === true ? 'auto' : 'none')};
    position: absolute;
    width: 200px;
    top: 0;
    left: ${props => (props.isOpen ? 'calc(100vw - 200px)' : '100vw')};
    height: 100vh;
    background: ${props => props.theme.primaryLight};
    text-align: left;
    padding-top: 16px;
    animation: ${props => (props.isOpen ? menuIn : menuOut)};
    animation-duration: 0.3s;
    box-shadow: ${props =>
      props.isOpen
        ? '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
        : 'none'};
    a {
      margin: 0 0 16px 16px;
    }
    z-index: 13;
  }
  @media (min-width: 600px) {
    width: 100%;
    display: flex;
    margin-left: 16px;
    a {
      padding: 4px 10px;
      border-radius: 4px;
      transition: background-color 0.2s ease-in-out;
    }
    a:hover {
      background-color: #0484f1;
    }
    a:active,
    a:focus {
      background-color: #0484f1;
      transition: none;
    }
  }
`;

const menuIn = keyframes`
0% {
  left: 100vw;
  box-shadow: none;
}
1% {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
}
100% {
  left: calc(100vw - 200px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
}
`;

const menuOut = keyframes`
100% {
  left: 100vw;
  box-shadow: none;
}
99% {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
}
0% {
  left: calc(100vw - 200px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
}
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  a {
    margin-right: 28px;
    color: #fff;
    letter-spacing: 1px;
  }
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderRight = styled.div`
  min-width: 150px;
  text-align: right;
  margin-right: 24px;
  align-self: center;
  a {
    color: #fff;
  }
  svg {
    margin-left: 4px;
  }
  @media (max-width: 599px) {
    text-align: left;
  }
`;

const HamburgerButton = styled.button`
  float: right;
  margin-right: 24px;
  display: inline-block;
  border: none;
  padding: 1rem 1.5rem;
  margin-right: 8px;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  @media (max-width: 599px) {
    display: initial;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsVisible: false,
      menuIsOpen: false,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.body.style.position = 'initial';
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    this.setState({
      menuIsOpen: 'init',
    });
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    return (
      <HeaderWrapper>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            src={templateLogo}
            alt="Template Logo"
            style={{
              width: '100px',
            }}
          />
        </Link>
        <NavLinks
          isOpen={this.state.menuIsOpen}
          isVisible={this.state.drawerIsVisible}
          ref={this.setWrapperRef}
        >
          <HeaderLeft className="header-left">
            <Link to="/shop">SHOP</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </HeaderLeft>
          <HeaderRight>
            <Link to="/">
              CART
              <svg
                style={{
                  height: '24px',
                  width: '26.4px',
                  verticalAlign: '-25%',
                }}
              >
                <use xlinkHref={`#${cartIcon.id}`} />
              </svg>
            </Link>
          </HeaderRight>
        </NavLinks>
        <HamburgerButton
          onClick={() => {
            this.handleHamburgerClick();
          }}
        >
          <svg style={{ height: '16px', width: '16px', verticalAlign: '-15%' }}>
            <use xlinkHref={`#${hamburgerIcon.id}`} />
          </svg>
        </HamburgerButton>
      </HeaderWrapper>
    );
  }
  handleHamburgerClick() {
    this.setState({
      menuIsOpen: true,
      drawerIsVisible: true,
    });
    document.body.style.position = 'fixed';
  }
  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      if (this.state.menuIsOpen === true) {
        this.setState({
          menuIsOpen: false,
        });
        document.body.style.position = 'initial';
      }
    }
  };
}

export default Header;
