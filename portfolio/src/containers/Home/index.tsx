import React from 'react';

import Container from 'react-bootstrap/Container';

import ExpertiseSection from 'components/ExpertiseSection';
import NavBar from 'components/NavBar/';

import './index.scss';

const HomePage = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Container>
        <ExpertiseSection />
      </Container>
    </>
  );
};

export default HomePage;
