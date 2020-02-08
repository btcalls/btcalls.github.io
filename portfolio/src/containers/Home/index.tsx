import React from 'react';
import Container from 'react-bootstrap/Container';

import NavBar from 'components/NavBar/';

import './index.scss';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Hi, I'm</h1>
      </Container>
    </>
  );
}

export default HomePage;
