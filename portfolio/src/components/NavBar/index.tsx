import React from 'react';

import 'components/NavBar/index.scss';

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <div className="menus">
        <span className="enabled">Home</span>
        <span>Work</span>
        <span>About</span>
      </div>

      <div className="sns">
        <span>FB</span>
        <span>IG</span>
        <span>TW</span>
      </div>
    </div>
  )
}

export default NavBar;
