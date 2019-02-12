import React from 'react';
import ReactSwipe from 'react-swipe';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import arrowIcon from '../images/arrow.svg';

const Carousel = () => {
  let reactSwipeEl;
  const CarouselWrapper = styled.div`
    max-height: 600px;
    margin-top: -24px;
    height: 100%;
    overflow: hidden;
    position relative;
    button:hover {
        background: rgba(0, 0, 0, 0.4);
    }
  `;
  const CarouselButton = styled.button`
    background: rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    color: white;
    top: 50%;
    margin-top: -24px;
    padding: 16px;
    z-index: 11;
    border: none;
    left: ${props => props.right && 'calc(100vw - 56px)'};
    transform: ${props => props.right && 'scaleX(-1)'};
    filter: ${props => props.right && 'FlipH'};
    cursor: pointer;
    @media (max-width: 599px) {
      display: none;
    }
  `;

  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { regex: "/slide1/" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageTwo: file(relativePath: { regex: "/slide2/" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageThree: file(relativePath: { regex: "/slide3/" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <CarouselWrapper>
          <ReactSwipe
            className="carousel"
            swipeOptions={{
              continuous: true,
              speed: 600,
              auto: 5000,
            }}
            ref={el => (reactSwipeEl = el)}
          >
            <div>
              <Img fluid={data.imageTwo.childImageSharp.fluid} />
            </div>
            <div>
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </div>
            <div>
              <Img fluid={data.imageOne.childImageSharp.fluid} />
            </div>
          </ReactSwipe>
          <CarouselButton right onClick={() => reactSwipeEl.next()}>
            <svg
              style={{ height: '24px', width: '24px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${arrowIcon.id}`} />
            </svg>
          </CarouselButton>
          <CarouselButton onClick={() => reactSwipeEl.prev()}>
            <svg
              style={{ height: '24px', width: '24px', verticalAlign: '-15%' }}
            >
              <use xlinkHref={`#${arrowIcon.id}`} />
            </svg>
          </CarouselButton>
        </CarouselWrapper>
      )}
    />
  );
};

// const Layout = ({ children }) => {
//     <StaticQuery
//       query={graphql`
//       query {
//         file(relativePath: { regex: "/template-logo/" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//       `}
//       render={data => (
//         <>
//           <Header /> {/* siteTitle={data.site.siteMetadata.title} */}
//           <div
//             style={{
//               margin: `0 auto`,
//               maxWidth: 960,
//               padding: `0px 1.0875rem 1.45rem`,
//               paddingTop: 0,
//             }}
//           >
//             {children}
//             <Archive />
//             <footer>
//               © {new Date().getFullYear()}, Built with
//               {` `}
//               <a href="https://www.gatsbyjs.org">Gatsby</a>
//             </footer>
//           </div>
//         </>
//       )}
//     />
//         };

export default Carousel;
