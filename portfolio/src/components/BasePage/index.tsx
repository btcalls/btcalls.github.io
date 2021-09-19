import React from 'react';

import Container from 'react-bootstrap/Container';

import NavBar from 'components/NavBar';

import './index.scss';

interface Props {
  children: React.ReactElement;
}

export default function BasePage({ children }: Props): React.ReactElement {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  );
}
