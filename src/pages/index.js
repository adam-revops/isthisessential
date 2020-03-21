import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`covid-19`, `essential`, ``]} />
    <h1>A site to help people find out what is open during COVID-19 scare.</h1>
  </Layout>
);

export default IndexPage;
