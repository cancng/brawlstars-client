import React from 'react';
import { Container } from "react-materialize";
import ClubForm from "../components/ClubForm";

const Club = () => {
  return (
    <Container>
      <h2 className='center orange-text'>Search Club</h2>
      <ClubForm/>
    </Container>
  );
};

export default Club;
