import React from 'react';
// import { Link } from 'gatsby';

import BrandSummary from '../components/brandSummary';
import Carousel from '../components/carousel';
// import Layout from '../components/layout';
import EmailBlock from '../components/emailBlock';
import Footer from '../components/footer';
import Header from '../components/header';
// import Listing from '../components/listing';
import SaleBlock from '../components/saleBlock';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Carousel />
      <SaleBlock />
      <BrandSummary />
      <EmailBlock />
      <Footer />
    </div>
  );
};

export default IndexPage;
