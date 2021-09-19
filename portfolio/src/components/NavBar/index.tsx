import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { SNS_FB, SNS_TWITTER, SNS_IG, SNS_LINKEDIN } from 'utils/constants';

import './index.scss';

export enum Paths {
  home = '/',
  portfolio = '/portfolio',
  about = '/about',
}

type SNS = {
  icon: IconDefinition,
  link: string,
}
// type Menu = {
//   title: string,
//   path: string,
// }

const SNS_ITEMS: SNS[] = [
  { icon: faFacebookF,
    link: SNS_FB },
  { icon: faInstagram,
    link: SNS_IG },
  { icon: faTwitter,
    link: SNS_TWITTER },
  { icon: faLinkedinIn,
    link: SNS_LINKEDIN },
];
// const MENU_ITEMS: Menu[] = [
//   { title: 'Portfolio',
//     path: Paths.portfolio },
//   { title: 'About Me',
//     path: Paths.about },
// ];

const NavBar = (): React.ReactElement => {
  const onClickSNS = (link: string): void => {
    window.open(link, '_blank')?.focus();
  };

  return (
    <div className="NavBar-container">
      <div className="menus">
        <Link to={Paths.home}>
          <span className="brand">BTCALLS</span>
        </Link>
      </div>

      <div className="sns">
        {/* {MENU_ITEMS.map((item, index) => (
          <Link key={index.toString()} className="menu" to={item.path}>
            <span className="menu-item">{item.title}</span>
          </Link>
        ))} */}

        {SNS_ITEMS.map((item, index) => (
          <span key={index} onClick={() => onClickSNS(item.link)} aria-hidden="true">
            <FontAwesomeIcon icon={item.icon} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
