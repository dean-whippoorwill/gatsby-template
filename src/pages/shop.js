import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Select from 'react-select';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProductCardComponent from '../components/productCard';

const ShopWrapper = styled.div`
  padding: 0 36px;
  color: ${props => props.theme.primaryColor};
`;
const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
  h1 {
    margin-bottom: 0;
    align-self: end;
  }
  padding-bottom: 36px;
`;

const CategorySelect = styled(Select)`
  padding-top: 2px;
  div.react-select__control {
    border: 1px solid ${props => props.theme.primaryLight};
  }
  div.react-select__option--is-selected {
    background: ${props => props.theme.primaryColor};
  }
  div.react-select__option--is-focused {
    background: ${props => props.theme.primaryLighter};
    color: ${props => props.theme.primaryLight};
  }
  div.react-select__single-value {
    color: ${props => props.theme.primaryLight};
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
                className="react-select-container"
                classNamePrefix="react-select"
                // theme={theme => ({
                //   ...theme,
                //   colors: {
                //     ...theme.colors,
                //     // primary: this.props.theme.primaryColor,
                //   },
                // })}
              />
            </div>
          </Category>
          <ProductCards>
            <StaticQuery
              query={PRODUCT_QUERY}
              render={({ allMarkdownRemark }) =>
                allMarkdownRemark.edges.map(({ node }) => {
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
