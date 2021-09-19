import React from 'react';

import BasePage from 'components/BasePage';

import './index.scss';

export default function HomePage(): React.ReactElement {
  return (
    <BasePage>
      <div className="container">
        <h1>Hello!</h1>
      </div>
    </BasePage>
  );
}
