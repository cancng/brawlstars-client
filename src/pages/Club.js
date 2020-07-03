import React from 'react';
import { Container } from 'react-materialize';
import ClubForm from '../components/ClubForm';
import { useStoreState } from 'easy-peasy';
import ClubInfo from '../components/ClubInfo';

const Club = () => {
  const lastClub = useStoreState((state) => state.club.lastClub);
  return (
    <Container>
      <h2 className='center orange-text'>Search Club</h2>
      <ClubForm />
      {lastClub.name && <ClubInfo club={lastClub} />}
    </Container>
  );
};

export default Club;
