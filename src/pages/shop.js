import React, { Component } from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Select from 'react-select';
import styled from 'styled-components';

const ShopWrapper = styled.div`
  padding: 0 12px 0 36px;
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

const ProductCard = styled.div`
  width: 360px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 24px 36px 0;
  display: ${props => (props.isVisible ? 'initial' : 'none')};
`;
const ProductImage = styled.div`
  background: #7fc4fd;
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
    color: #2699fb;
    text-decoration: none;
    font-weight: 600;
  }
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
            <ProductCard
              isVisible={this.state.selectedOption.value === options[0].value}
            >
              <ProductImage />
              <ProductInfo>
                <h4>
                  Gadget<span>$42</span>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt{' '}
                </p>
                <a href="#">VIEW ITEM</a>
              </ProductInfo>
            </ProductCard>
            <ProductCard
              isVisible={this.state.selectedOption.value === options[1].value}
            >
              <ProductImage />
              <ProductInfo>
                <h4>
                  Gizmo<span>$42</span>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt{' '}
                </p>
                <a href="#">VIEW ITEM</a>
              </ProductInfo>
            </ProductCard>
            <ProductCard
              isVisible={this.state.selectedOption.value === options[2].value}
            >
              <ProductImage />
              <ProductInfo>
                <h4>
                  Doodad<span>$42</span>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt{' '}
                </p>
                <a href="#">VIEW ITEM</a>
              </ProductInfo>
            </ProductCard>
          </ProductCards>
        </ShopWrapper>
      </Layout>
    );
  }
}

export default Shop;
