import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Select from 'react-select';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProductCardComponent from '../components/productCard';

const ShopWrapper = styled.div`
  padding: 0 36px;
  color: #2699fb;
`;
const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  h1 {
    margin-bottom: 0;
    align-self: end;
  }
  padding-bottom: 36px;
`;

const CategorySelect = styled(Select)`
  padding-top: 2px;
  div.css-xp4uvy {
    color: #2699fb;
  }
`;

const ProductCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: { value: 'Gadgets', label: 'Gadgets' },
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const options = [
      { value: 'Gadgets', label: 'Gadgets' },
      { value: 'Gizmos', label: 'Gizmos' },
      { value: 'Doo-dads', label: 'Doo-dads' },
    ];
    const PRODUCT_QUERY = graphql`
      query Products {
        allMarkdownRemark(
          filter: { frontmatter: { collection: { eq: "products" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                price
                description
                category
              }
            }
          }
        }
      }
    `;
    return (
      <Layout>
        <ShopWrapper>
          <Category>
            <h1>{this.state.selectedOption.value}</h1>
            <div>
              <label style={{ fontSize: `14px` }}>Select Category</label>
              <CategorySelect
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </div>
          </Category>
          <ProductCards>
            <StaticQuery
              query={PRODUCT_QUERY}
              render={({ allMarkdownRemark }) =>
                allMarkdownRemark.edges.map(({ node }) => {
                  // <ProductCard
                  //   isVisible={
                  //     this.state.selectedOption.value ===
                  //     node.frontmatter.category
                  //   }
                  //   // isVisible={true}
                  // >
                  //   <ProductImage />
                  //   <ProductInfo>
                  //     <h4>
                  //       {node.frontmatter.title}
                  //       <span>${node.frontmatter.price}</span>
                  //     </h4>
                  //     <p>{node.frontmatter.description}</p>
                  //     <a href="#">VIEW ITEM</a>
                  //   </ProductInfo>
                  // </ProductCard>
                  for (let option in options) {
                    if (
                      node.frontmatter.category === options[option].value &&
                      this.state.selectedOption.value == options[option].value
                    ) {
                      return (
                        <ProductCardComponent
                          key={node.frontmatter.title}
                          title={node.frontmatter.title}
                          price={node.frontmatter.price}
                          description={node.frontmatter.description}
                        />
                      );
                    }
                  }
                })
              }
            />
          </ProductCards>
        </ShopWrapper>
      </Layout>
    );
  }
}

export default Shop;
