import React from 'react';
import { Container } from 'react-materialize';
import { useStoreState } from 'easy-peasy';

import BrawlerForm from '../components/BrawlerForm';
import BrawlerInfo from '../components/BrawlerInfo';

const Homepage = () => {
  const lastBrawler = useStoreState((state) => state.brawlers.lastBrawler);
  return (
    <Container>
      <BrawlerForm />
      {lastBrawler.name && <BrawlerInfo brawler={lastBrawler} />}
    </Container>
  );
};

export default Homepage;
