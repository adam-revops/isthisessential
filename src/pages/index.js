import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search';
import styled from '@emotion/styled';

const Homepage = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 40vw;
  height: 100%;
  color: orange;
`;

const Ruler = styled.hr`
  color: orange;
  border: 1px solid orange;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`covid-19`, `essential`, ``]} />

    <Homepage>
      <h1>Is this essential?</h1>
      <Ruler />
      <Search />

    </Homepage>
  </Layout>
);

export default IndexPage;
